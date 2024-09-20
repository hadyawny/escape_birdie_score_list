import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 10,
      
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const scoreModel = mongoose.model("Score", schema);
