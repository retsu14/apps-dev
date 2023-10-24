const mysql = require("mysql2");

const connectDb = async () => {
  try {
    mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "apps-dev",
    });
    console.log("Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
