const { readdirSync } = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');



// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())






// server
// let port = process.env.port || 8000;
const port = 4000


// Connect to DB and start server
mongoose.connect('mongodb://127.0.0.1:27017/alionMart')
.then(() => console.log("Database connection success"))
.catch((error) => console.error("failed to connect", error));


// routes middleware 
readdirSync("./routes").map(r => app.use("/v1", require(`./routes/${r}`)));


app.listen(port, () =>{
    console.log("server is started on port " +port)
})