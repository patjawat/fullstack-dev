import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './config/constants';
import express from 'express';
import path, { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use('/public', express.static(join(__dirname, '..', 'public')));
  // app.use(express.static(path.join(__dirname, 'public')));
  
  const configService = app.get(ConfigService)
  const port  = +configService.get<Number>(SERVER_PORT) || 3000;

  await app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
