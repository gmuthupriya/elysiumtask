const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./dbConnection");
const appointmentsRoute = require("./routes/appointmentsRoute.js");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
const dotenv = require("dotenv").config();
connectDb();

app.use("/api/customer", appointmentsRoute);

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});