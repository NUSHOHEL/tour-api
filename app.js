const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./utilities/dbConnect");
const color = require("colors");
const cors = require("cors");
const tourRouter = require("./routes/tourRoutes")
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
dbConnect();



app.use("/tours",tourRouter);

app.get("/", (req, res) => {
  res.send("<marquee>This is Home route for Tour Api </marquee>");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`app listening on port ${8080}`.red);
});
