import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router as studentRouter } from "./src/routers/studentRouter.js";
import { router as homeworkRouter } from "./src/routers/homeworkRouter.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("veritabanına bağlandı");
  })
  .catch((err) => {
    console.log("veritabanına bağlanırken hata oluştu");
  });

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/api", studentRouter);
app.use("/api", homeworkRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
