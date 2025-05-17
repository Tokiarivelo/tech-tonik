/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Configurer le middleware pour l'upload de fichiers
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  const globalPrefix = 'graphql';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
