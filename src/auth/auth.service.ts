import { Injectable, Response } from '@nestjs/common';
import { ResponseHelper } from 'src/utils/response';

@Injectable()
export class AuthService {
  create(payload: any) {
    return ResponseHelper.sendResponse(payload, 'Auth created successfully');
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: string) {
    return `This action returns a #${id} auth`;
  }

  update(id: string) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }
}
