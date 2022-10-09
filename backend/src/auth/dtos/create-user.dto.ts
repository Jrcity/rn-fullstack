import { CREATE, JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreateUserDto {
	@JoiSchema(Joi.string().required())
	@JoiSchema([CREATE], Joi.date().required())
	created!: string;

	@JoiSchema(Joi.string().required())
	@JoiSchema(
		[CREATE],
		Joi.string()
			.email({
				tlds: { allow: ['com', 'net', 'info', 'io'] },
				minDomainSegments: 2,
			})
			.required(),
	)
	email!: string;

	@JoiSchema(Joi.string().required())
	@JoiSchema([CREATE], Joi.string().min(2).required())
	firstname!: string;

	@JoiSchema(Joi.string().optional())
	id!: string;

	@JoiSchema(Joi.string().required())
	@JoiSchema([CREATE], Joi.string().min(2).required())
	lastname!: string;

	@JoiSchema(Joi.string().required())
	@JoiSchema(
		[CREATE],
		Joi.string()
			.min(8)
			.max(30)
			.pattern(
				new RegExp(
					'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,30})',
				),
			)
			.required(),
	)
	password!: string;
}
