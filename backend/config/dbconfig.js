const mysql = require("mysql");

const connectDb = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "apps-dev",
    });
    return connection;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
