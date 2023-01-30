import mongoose from "mongoose";

const homeworkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    complated: {
      type: Boolean,
      default: false,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  },
  { collection: "Homework", timestamps: true }
);

export const Homework = mongoose.model("Homework", homeworkSchema);
