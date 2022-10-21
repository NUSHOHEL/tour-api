const mongoose = require("mongoose");
const dbConnect =  () => {
   mongoose.connect(process.env.DB_URI, (error) => {
    error ? console.log(error) : console.log("connection success");
  });
};
module.exports = dbConnect;
