import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const [filters, setFilters] = useState({
    Location: "",
    Category: "",
    Experience: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  useEffect(() => {
    let filtered = allJobs;

    if (searchedQuery) {
      const q = searchedQuery.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q)
      );
    }
    if (filters.Location) {
      filtered = filtered.filter((job) => job.location === filters.Location);
    }
    if (filters.Category) {
      filtered = filtered.filter((job) => job.category === filters.Category);
    }
    if (filters.Experience) {
      filtered = filtered.filter(
        (job) => job.experience === filters.Experience
      );
    }

    setFilterJobs(filtered);
    setCurrentPage(1); // Reset to page 1 on filter/search change
  }, [allJobs, searchedQuery, filters]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filterJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filterJobs.length / jobsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Filter Section */}
        <div className="w-full lg:w-1/5">
          {/* Mobile Accordion Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-[#1E88E5] text-white px-4 py-2 rounded-md font-medium"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            {showFilters && (
              <div className="mt-4 border rounded-md p-4 bg-white shadow-sm">
                <FilterCard
                  selectedFilters={filters}
                  setSelectedFilters={setFilters}
                />
              </div>
            )}
          </div>

          {/* Desktop Sidebar Filter */}
          <div className="hidden lg:block">
            <FilterCard
              selectedFilters={filters}
              setSelectedFilters={setFilters}
            />
          </div>
        </div>

        {/* Job List */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#003049] mb-6">
            Latest Jobs
          </h1>

          {filterJobs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg mt-20">
              No jobs found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
              {currentJobs.map((job) => (
                // <motion.div
                //   initial={{ opacity: 0, x: 100 }}
                //   animate={{ opacity: 1, x: 0 }}
                //   exit={{ opacity: 0, x: -100 }}
                //   transition={{ duration: 0.3 }}
                //   key={job._id}
                // >
                <Job job={job} />
                // </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-5 py-2.5 rounded-full bg-[#1E88E5] hover:bg-[#1565C0] text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            >
              Prev
            </button>

            <span className="text-gray-800 font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-5 py-2.5 rounded-full bg-[#1E88E5] hover:bg-[#1565C0] text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
