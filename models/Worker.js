const { Schema, model } = require("mongoose");

const workerSchema  = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  price: {
    type: Number,
    requird: [true, "Please provide a price"],
  },
  img: {
    type: String,
    required: [true, "Please provide a image"],
  },
  comment: {
    type: String,
    required: [true, "Please provide a comment"],
  },
  adress: {
    type: String,
    required: [true, "Please provide a adress"],
  },
  categoryId: {
    ref: 'categorys',
    type: Schema.Types.ObjectId,
    required: [true, "Please provide a Category"],
  }
});

const Worker = model("worker", workerSchema);

module.exports = Worker;