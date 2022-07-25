const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors');
const connectDB = require('./config/db');
const foodRoute = require('./routes/fooditem');
const path = require("path");

connectDB();

const app = express();


app.use(express.json());

app.use("/api/food", foodRoute);

app.listen(port , () => console.log(`Server started on port ${port}`));
