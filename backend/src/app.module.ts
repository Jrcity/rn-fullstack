require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [MongooseModule.forRoot(process.env.mongo_uri), AuthModule],
	controllers: [], //controllers
	providers: [], //services
})
export class AppModule {}
