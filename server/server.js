import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import ApplicationRoute from "./routes/application.route.js";
dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ["https://prohirejobs.vercel.app", undefined];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => res.send("API Working"));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", ApplicationRoute);
