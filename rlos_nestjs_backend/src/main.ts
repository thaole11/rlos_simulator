import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { LeadDetailsModule } from './lead-details/lead-details.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS for all origins
  app.enableCors({
    origin: '*', // Allow requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type, Authorization' // Allow these headers
  });

  const options = new DocumentBuilder()
    .setTitle('Promete Taxi API service')
    .setDescription('API docs for Promete Taxi service')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [LeadDetailsModule]
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('NEST_LISTEN_PORT') || 13001, '0.0.0.0');
}

bootstrap().then(() => new Logger('Main').log('Application is running'));
