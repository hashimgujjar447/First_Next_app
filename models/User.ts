import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  isVerified: boolean;
  verificationCode?: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
