// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ResponseHelper } from 'src/utils/response';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async fetchAllUsers() {
        try {
            const users = await this.userRepository.getAll();
            return ResponseHelper.sendResponse(200,users);
        } catch (error) {
            // Handle the error accordingly
            return ResponseHelper.sendResponse(500, error.message);
        }
    }
}
