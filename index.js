const cors = require('cors');
const express = require("express");

const app = express();

const {router} = require("./BackEnd/routes/userRoute");
const {productRouter} = require("./BackEnd/routes/productRoute");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

console.log(PORT);

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/", productRouter);

app.listen(PORT);
