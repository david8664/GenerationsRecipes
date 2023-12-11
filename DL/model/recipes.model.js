const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    upload: { type: String, default: new Date() },
    image: { type: String, required: true },
    description: { type: String, required: true },
    preparationTime: { type: Number, required: true },
    ingredients: [String],
    instructions: { type: String, required: true },
    tags: [String],
    yield: { type: Number, required: true },
    private: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true, // create last change time and create user time
  }
);

const recipesModel = mongoose.model("recipes", recipesSchema);
export default recipesModel;
