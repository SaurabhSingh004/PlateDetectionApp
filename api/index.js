const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const infoRoute=require("./route/inforoute");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/", infoRoute);
app.get("/",(req,res)=>{
    res.send("hello ");
})
app.listen(8800, (req,res) => {
  console.log("Backend server is running!");
});