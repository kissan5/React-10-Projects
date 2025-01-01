import mongoose from "mongoose";
import bcrypt from "bcrypt.js";

const userSchema = new mongoose.Schema({
  email: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genal(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
