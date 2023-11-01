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

app.use("/barangayofficials", async (req, res) => {
  const connection = await connectDb();
  const sql =
    "INSERT INTO barangayofficials(fname, lname, age) VALUES('Elieser', 'Tajanlangit', 21)";
  connection.query(sql, (err, results, fields) => {
    if (err) throw err;
    res.end(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
