import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  root() {
    return {
      message: 'Hello World!',
      date: new Date()
    }
  }
}
