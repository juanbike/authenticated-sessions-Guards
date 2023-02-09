import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './modules/config/enviroments';
import configuration from './modules/config/configuration';


@Module({
  imports: [ConfigModule.forRoot({
    //envFilePath: enviroments [process.env.NODE_ENV] || '.env',
    envFilePath:['.env', '.stage.env'],
    load: [configuration],
    isGlobal: true,
    validationSchema: Joi.object({
       TITLE: Joi.string().required(),
  }),
}),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/auth'
    ),  UsersModule, AuthModule], 
  controllers: [AppController],
  providers: [AppService]
  
})
export class AppModule {}
