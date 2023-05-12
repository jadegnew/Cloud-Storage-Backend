import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from "./users/entities/user.entity";
import { FileEntity } from "./files/entities/file.entity";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import * as process from "process";

@Module({
  imports: [UsersModule, FilesModule, ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [UserEntity, FileEntity],
    synchronize: true,
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
