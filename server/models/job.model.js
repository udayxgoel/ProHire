import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      enum: ["Intern", "Junior", "Mid", "Senior"],
      required: true,
    },
    location: {
      type: String,
      enum: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Remote"],
      required: true,
    },
    category: {
      type: String,
      enum: ["FullStack Developer", "Backend Developer", "Frontend Developer"],
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
