require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const personRoute = require("./routes/person");

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jerxi6e.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/person", personRoute);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
