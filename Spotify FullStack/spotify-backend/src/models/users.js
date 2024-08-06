import mongoose from "mongoose";
import bycrypt from "bycryt.js";

const userSchema = new mongoose.Schema({
  email: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bycrypt.gensalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
