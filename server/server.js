import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import ApplicationRoute from "./routes/application.route.js";
import { clerkWebHooks } from "./controllers/webhooks.js";
dotenv.config({});

// Initialize Express
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", ApplicationRoute);
app.post("/webhook", clerkWebHooks);
