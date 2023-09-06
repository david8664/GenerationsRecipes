const mongoose = require("mongoose");
require("./recipes.model");

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

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
