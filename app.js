const express = require("express");
const mongoose = require("mongoose");
const app = express();

const personRoute = require("./routes/person");

const PORT = 3000;
const connectionString =
  "mongodb+srv://root:root@cluster0.jerxi6e.mongodb.net/?retryWrites=true&w=majority";

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
