import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setsearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const dispatch = useDispatch();
  const { allJobs, searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    return () => {
      dispatch(setsearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
          {searchedQuery && (
            <span className="text-gray-500"> for "{searchedQuery}"</span>
          )}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allJobs.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full">
              No jobs found for your search.
            </p>
          ) : (
            allJobs.map((job) => <Job key={job._id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
