// src/notification/notification.repository.ts
import { Injectable } from '@nestjs/common';
import { IUser, IUserDocs } from 'src/interface/user.interface';
import { UserSchema } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/common/repositories/base.repositories';

@Injectable()
export class UserRepository extends BaseRepository<IUser, IUserDocs> {
    constructor(@InjectModel(UserSchema.name) private readonly userModel: Model<IUserDocs>) {
        super(userModel);
    }
}
