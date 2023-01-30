import express from "express";
import {
  homeworkAdd,
  homeworkGetAll,
  homeworkUpdate,
  homeworkDelete,
  homeworkGet,
} from "../controllers/homeworkController.js";

export const router = express.Router();

router.post("/homework", homeworkAdd);
router.get("/homeworks", homeworkGetAll);
router.put("/homework/:id", homeworkUpdate);
router.delete("/homework/:id", homeworkDelete);
router.get("/homework/:id", homeworkGet);
