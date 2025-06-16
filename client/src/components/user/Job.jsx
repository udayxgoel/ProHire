import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgo = (dateStr) => {
    const created = new Date(dateStr);
    const now = new Date();
    const diffTime = now - created;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return days === 0 ? "Posted today" : `Posted ${days}d ago`;
  };

  return (
    <div className="w-full h-full p-4 sm:p-6 rounded-xl shadow-md bg-[#f5faff] border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between gap-y-3 overflow-hidden">
      {/* Post Date */}
      <p className="text-sm text-gray-500">{daysAgo(job?.createdAt)}</p>

      {/* Company Info */}
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={job?.company?.logo || "https://via.placeholder.com/40"}
            alt="Company"
          />
        </Avatar>
        <div className="truncate">
          <h2 className="font-semibold text-gray-800 text-base truncate">
            {job?.company?.name || "Company Name"}
          </h2>
          <p className="text-sm text-gray-600">{job?.location}</p>
        </div>
      </div>

      {/* Job Title & Short Description */}
      <div>
        <h1 className="text-lg font-bold text-[#003049] mb-1 truncate">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-700 line-clamp-2">
          {job?.description?.replace(/<[^>]+>/g, "")}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="text-blue-600 border-blue-300">
          {job?.experience}
        </Badge>
        <Badge variant="outline" className="text-red-600 border-red-300">
          {job?.category}
        </Badge>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto w-full">
        <Button
          className="sm:w-1/2 w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white"
          onClick={() => navigate(`/description/${job?._id}`)}
        >
          Apply Now
        </Button>
        <Button
          variant="outline"
          className="sm:w-1/2 w-full border-gray-400 text-gray-800"
          onClick={() => navigate(`/description/${job?._id}`)}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Job;
