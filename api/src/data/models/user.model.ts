import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}


export const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
})

UserSchema.methods.encryptPassword = async function (password: string) {
  const hash = await  bcrypt.hash(password, 10);
  return hash
}

UserSchema.methods.validatePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const hash = await this.encryptPassword(this.password)
  this.password = hash
  return next()
})

export const UserModel = mongoose.model('User', UserSchema)