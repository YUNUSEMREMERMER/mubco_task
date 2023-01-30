import express from "express";
import {
  studentAdd,
  studentGetAll,
  studentUpdate,
  studentDelete,
  studentGet,
} from "../controllers/studentController.js";

export const router = express.Router();

router.post("/student", studentAdd);
router.get("/students", studentGetAll);
router.put("/student/:id", studentUpdate);
router.delete("/student/:id", studentDelete);
router.get("/student/:id", studentGet);
