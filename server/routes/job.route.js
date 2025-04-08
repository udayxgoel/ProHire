import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getAllJobs,
  getJobById,
  getJobsByAdmin,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getJobsByAdmin);
router.route("/get/:id").get(getJobById);

export default router;
