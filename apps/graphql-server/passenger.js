// ADDED!!!
if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app/app.module');
const { graphqlUploadExpress } = require('graphql-upload-ts');
const http = require('http');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware upload GraphQL
  app.use(
    graphqlUploadExpress({
      maxFileSize: 10_000_000,
      maxFiles: 5,
    }),
  );

  await app.init();

  const server = http.createServer((req, res) => {
    const contentType = req.headers['content-type'] || '';

    // Si c'est un upload multipart, on ne consomme pas le flux
    if (contentType.startsWith('multipart/form-data')) {
      console.log('➡️  HTTP', req.method, req.url);
      console.log('   Content-Type:', contentType);
      console.log('   Content-Length:', req.headers['content-length']);
      console.log(
        '   └─ Multipart upload detected, filenames logged in resolver.',
      );

      // On délègue tout de suite à Nest/Express
      return app.getHttpAdapter().getInstance()(req, res);
    }

    // Sinon, pour les JSON ou autres, on peut encore logger les filenames
    let rawBody = '';
    req.on('data', (chunk) => {
      rawBody += chunk;
    });

    req.on('end', () => {
      console.log('➡️  HTTP', req.method, req.url);
      console.log('   Content-Type:', contentType);
      console.log('   Content-Length:', req.headers['content-length']);

      // Extraction des filename si c'était du multipart (rare ici)
      const filenames = [];
      const filenameRegex = /filename="([^"]+)"/g;
      let match;
      while ((match = filenameRegex.exec(rawBody)) !== null) {
        filenames.push(match[1]);
      }
      if (filenames.length) {
        console.log('   └─ Uploaded filenames:', filenames.join(', '));
      } else {
        console.log(
          '   └─ Aucun filename détecté (body non-multipart ou JSON)',
        );
      }

      app.getHttpAdapter().getInstance()(req, res);
    });

    req.on('error', (err) => {
      console.error('❌ Erreur lecture requête :', err);
      res.statusCode = 400;
      res.end('Bad Request');
    });
  });

  const port =
    typeof PhusionPassenger !== 'undefined'
      ? 'passenger'
      : process.env.PORT || 3000;

  server.listen(port, () => console.log(`Listening on ${port}`));
}

bootstrap();
