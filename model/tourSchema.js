const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    tourName: { type: String, required: true, trim: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    travelers: { type: Number, required: true },
    desc: { type: Number, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const tour = mongoose.model("tour", tourSchema);
module.exports = tour;
