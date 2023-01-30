import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    homeworks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Homework" }],
  },
  { collection: "Student", timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
