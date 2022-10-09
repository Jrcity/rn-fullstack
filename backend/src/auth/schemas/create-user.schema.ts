import mongoose from 'mongoose';

export const createUserSchema = new mongoose.Schema({
	created: Date,
	email: String,
	firstname: String,
	lastname: String,
	password: String,
});
