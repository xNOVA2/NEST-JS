// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  // Correct import for MongooseModule
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: User }]), 
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
