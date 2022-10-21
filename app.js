const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./utilities/dbConnect");
const color = require("colors");
const cors = require("cors");
const tour = require("./model/tourSchema");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
dbConnect();
app.post("/tours", async (req, res) => {
  const tours = new tour(req.body);
  const newtour = await tours.save();
  res.send(newtour);
});

app.get("/", (req, res) => {
  res.send("<marquee>This is Home route for Tour Api </marquee>");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`app listening on port ${8080}`.red);
});
