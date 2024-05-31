import { Password } from "@/services/password/password";
import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  playedQuiz: any;
  isAdmin: boolean;
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    playedQuiz: {
      type: [],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,

    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

export const UserModel =
  mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);
