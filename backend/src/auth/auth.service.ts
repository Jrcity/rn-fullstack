import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IcreateUser } from './interfaces/create-user.interface';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel('User')
		private readonly createUserModel: Model<IcreateUser>,
	) {}
	async createUser(user: IcreateUser): Promise<IcreateUser> {
		try {
			const newUser = new this.createUserModel(user);

			return await newUser.save();
		} catch (err) {
			console.error(err);
		}
	}
	async checkUserExit(email: string): Promise<boolean> {
		return (await this.createUserModel.findOne({ email })) ? true : false;
	}
}
