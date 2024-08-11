import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  login(@Body() payload: any) {
    return this.authService.login(payload);
  }

  @Post('register')
  register(@Body() payload: any) {
    return this.authService.register(payload);
  }
}
