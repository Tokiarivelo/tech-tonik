'use strict';

const http = require('http');
const { Logger } = require('@nestjs/common');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app/app.module');

async function bootstrap() {
  // Si Passenger est chargé, désactivez l’auto-install
  if (typeof PhusionPassenger !== 'undefined') {
    PhusionPassenger.configure({ autoInstall: false });
  }

  // Crée l’app Nest sans appeler automatiquement listen()
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'graphql';
  app.setGlobalPrefix(globalPrefix);
  await app.init();

  // Crée un serveur HTTP simple
  const server = http.createServer((req, res) => {
    app.getHttpAdapter().getInstance()(req, res);
  });

  // Écoute sur le socket Passenger ou sur un port fallback
  if (typeof PhusionPassenger !== 'undefined') {
    server.listen('passenger', () => {
      Logger.log(
        `🚀 NestJS (Passenger) en écoute sur socket 'passenger'/${globalPrefix}`,
      );
    });
  } else {
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
      Logger.log(
        `🚀 Application NestJS en écoute sur http://localhost:${port}/${globalPrefix}`,
      );
    });
  }
}

bootstrap();
