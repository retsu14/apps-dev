require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const connectDb = require("./config/dbconfig");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

connectDb();

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
