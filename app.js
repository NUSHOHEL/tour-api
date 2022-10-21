const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./utilities/dbConnect");
const app = express();
dotenv.config();

const port = process.env.PORT;

dbConnect();

app.get("/", (req, res) => {
  res.send("<marquee>This is Home route for Tour Api </marquee>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
