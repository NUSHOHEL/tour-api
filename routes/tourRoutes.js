const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");

router.route("/").post(tourController.postAtour).get(tourController.getAllTour);

module.exports = router;
