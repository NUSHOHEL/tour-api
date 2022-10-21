const tour = require("../model/tourSchema");

exports.postAtour = async (req, res) => {
  const tours = new tour(req.body);
  const newtour = await tours.save();
  res.status(200).json(newtour);
};
exports.getAllTour = async (req, res) => {
  try {
    const result = await tour.find({});
    res.status(200).json(result);
  } catch (error) {}
};
