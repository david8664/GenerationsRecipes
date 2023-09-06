const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema(
  {
    name: { type: String, required },
    upload: { type: String, default: new Date() },
    image: { type: String, required },
    description: { type: String, required },
    preparationTime: { type: Number, required },
    ingredients: [String],
    instructions: { type: String, required },
    tags: [String],
    yield: { type: Number, required },
    private: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("recipes", recipesSchema);
module.exports = userModel;
