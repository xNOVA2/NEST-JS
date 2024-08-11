import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  root() {
    return {
      welcome: 'Welcome to the Nest js!',
    }
  }
}
