import mongoose, { Schema } from 'mongoose';
import { Document } from 'mongoose';

interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  active: boolean;
}

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean },
  },
  {
    timestamps: true
  }
);

export default mongoose.model<User>('User', UserSchema);