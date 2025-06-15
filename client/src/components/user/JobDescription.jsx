import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/api";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const isInitiallyApplied =
    singleJob?.applications?.some((app) => app.applicant === user?._id) ||
    false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);
  const dispatch = useDispatch();
  const { id: jobId } = useParams();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setIsApplied(true);
        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [...singleJob.applications, { applicant: user?._id }],
          })
        );
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some((app) => app.applicant === user?._id)
          );
          console.log(singleJob);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <div className="bg-[#f1f6fa] shadow-md p-6 rounded-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={
                  singleJob?.company?.logo ||
                  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Default-avatar.jpg"
                }
                alt="Company Logo"
                className="w-16 h-16 rounded-lg object-cover border"
              />
              <div>
                <h2 className="text-2xl font-semibold">{singleJob?.title}</h2>
                <p className="text-gray-600">{singleJob?.company?.name}</p>
                <p className="text-gray-500 text-sm">{singleJob?.location}</p>
              </div>
            </div>

            <Button
              onClick={applyJobHandler}
              disabled={isApplied}
              className={`px-6 py-2 text-white font-semibold rounded-md ${
                isApplied
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply Now"}
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm mt-4">
            <Badge variant="outline">Experience: {singleJob?.experience}</Badge>
            <Badge variant="outline">Salary: ₹{singleJob?.salary} LPA</Badge>
            <Badge variant="outline">
              Applicants: {singleJob?.applications?.length || 0}
            </Badge>
            <Badge variant="outline">
              Posted: {singleJob?.createdAt?.split("T")[0]}
            </Badge>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white shadow-sm p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Job Description</h3>
          <p
            dangerouslySetInnerHTML={{ __html: singleJob?.description }}
            className="text-gray-700 leading-relaxed"
          ></p>

          {/* Bottom Apply Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={applyJobHandler}
              disabled={isApplied}
              className={`px-6 py-2 text-white font-semibold rounded-md ${
                isApplied
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply Now"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDescription;
