import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LeadDetailsModule } from './lead-details/lead-details.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.BACKEND_POSTGRES_USER,
      password: process.env.BACKEND_POSTGRES_PASSWORD,
      database: process.env.BACKEND_POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true
    }),
    LeadDetailsModule
  ]
})
export class AppModule {}