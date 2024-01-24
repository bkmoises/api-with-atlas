import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import personRoute from "./routes/person.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jerxi6e.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/person", personRoute);

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database conected!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
