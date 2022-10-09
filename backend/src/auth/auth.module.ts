import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JoiPipeModule, JoiSchemaOptions } from 'nestjs-joi';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { createUserSchema } from './schemas/create-user.schema';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'User', schema: createUserSchema }]),
		JoiPipeModule,
	],
	controllers: [AuthController],
	providers: [AuthService],
})
@JoiSchemaOptions({ allowUnknown: false })
export class AuthModule {}
