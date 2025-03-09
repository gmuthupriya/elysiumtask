const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./dbConnection");
const appointmentsRoute = require("./routes/appointmentsRoute.js");


const app = express();
app.use(bodyParser.json());
const dotenv = require("dotenv").config();
connectDb();

console.log("ishdfoifh")
app.use("/api/customer", appointmentsRoute);
const PORT = 8000;
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});