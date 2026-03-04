import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    instructorName: {
      type: String,
      required: true
    },
    publishYear: {
      type: Number,
      required: true
    },
    difficultyLevel: {
      type: String,
      required: true
    },
    
    price: {
      type: Number,
      default: 0
    },
    views: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Material = mongoose.model("Material", materialSchema);
export default Material;