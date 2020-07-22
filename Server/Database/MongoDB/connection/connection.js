const mongoose = require("mongoose");
const { resolve } = require("path");
const chalk = require("chalk");
require("dotenv").config({ path: resolve(__dirname, "../../../../Config/.env"), });


// Connection string
const URI = process.env.DB_URI.replace("DB_USER", process.env.DB_USER)
  .replace("DB_PASS", process.env.DB_PASS)
  .replace("DB_DOCUMENT", process.env.DB_DOCUMENT)
  .replace("DB_PROTOCOL", process.env.DB_PROTOCOL)
  .replace("DB_DOMAIN", process.env.DB_DOMAIN)
  .replace("DB_PARAMS", process.env.DB_PARAMS);

exports.connection = mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((d) => console.log(chalk.green.bold("✔ Database connected...")))
  .catch((error) =>
    console.log(
      chalk.red.bold(`❌ An error was found. Could not connect! ${error}`)
    )
  );

