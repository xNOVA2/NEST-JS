import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config(); 
@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
