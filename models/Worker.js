const { Schema, model } = require("mongoose");

const workerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  price: {
    type: Number,
    requird: [true, "Please provide a price"],
  },
  img: {
    type: String,
    // required: [true, "Please provide a image"],
  },
  description: {
    type: String,
    required: [true, "Please provide a comment"],
  },
  adress: {
    type: String,
    required: [true, "Please provide a adress"],
  },
  categoryId: {
    ref: "categorys",
    type: Schema.Types.ObjectId,
    required: [true, "Please provide a Category"],
  },
  stars: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  review: {
    type: Array,
    default: [],
  },
});

const Worker = model("worker", workerSchema);

module.exports = Worker;
