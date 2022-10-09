import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { IcreateUser } from './interfaces/create-user.interface';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@Post('create-user')
	create(@Body() createUserDto: CreateUserDto): Promise<IcreateUser> {
		return this.authService.createUser(createUserDto);
	}
	@Get('create-user/:id')
	findOne(@Param('id') id: string): Promise<boolean> {
		return this.authService.checkUserExit(id);
	}
}
