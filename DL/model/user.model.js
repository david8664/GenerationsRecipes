import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, select: false, required: true },
  passwordChangeRequested: { type: Boolean, default: false },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  CreationDate: { type: Date, default: new Date() },
  lastLogin: { type: Date, default: new Date() },
  recipes: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
  isActive: { type: Boolean, default: true },
});

const userModel = mongoose.models.Users || mongoose.model("Users", userSchema);
export default userModel;
