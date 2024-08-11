import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/interface/repository-interface/user.repository.interface';
import { IUser } from 'src/interface/user.interface';
import { ResponseHelper } from 'src/utils/response';
import {compare} from 'bcrypt'; // Assuming you use bcrypt for hashing
import { ERROR_LOGIN, STATUS_CODE } from 'src/constant/constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async login(payload: IUser) {
    try {
      // Retrieve the user by email and include password in the response
      const user = await this.userRepository.getOne<IUser>(
        { email: payload.email },
        '',  
        'password' // Select only the password field
      );
      if (!user) {
        return ResponseHelper.sendResponse(STATUS_CODE.BAD_REQUEST, ERROR_LOGIN);
      }
      const isPasswordValid = await compare(payload.password, user.password);

      if (!isPasswordValid) {
        return ResponseHelper.sendResponse(STATUS_CODE.BAD_REQUEST, ERROR_LOGIN);
      }

      return ResponseHelper.sendResponse(200, 'Login successful');
    } catch (error) {
      console.error('Login error:', error); // Log the error for debugging
      return ResponseHelper.sendResponse(500, 'Internal server error');
    }
  }

  async register(payload: IUser) {
    try {
      // Create a new user
      const user = await this.userRepository.create<IUser>(payload);
      return ResponseHelper.sendResponse(STATUS_CODE.CREATED, user);
    } catch (error) {
      console.error('Register error:', error); // Log the error for debugging
      return ResponseHelper.sendResponse(500, 'Internal server error');
    }
  }
}
