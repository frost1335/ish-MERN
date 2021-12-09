const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  img: {
    type: String,
    required: [true, "Please provide a image"],
  },
});

const Category = model("category", categorySchema);

module.exports = Category;
