import React, { useEffect, useState } from "react";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByFilter } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByFilter) return true;
      return (
        job?.title?.toLowerCase().includes(searchJobByFilter.toLowerCase()) ||
        job?.company?.name
          .toLowerCase()
          .includes(searchJobByFilter.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByFilter]);

  return (
    <div className="w-full px-4">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border rounded-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Company Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterJobs.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  You haven't posted any job yet!
                </td>
              </tr>
            ) : (
              filterJobs.map((job) => (
                <tr key={job._id} className="border-t">
                  <td className="p-3">{job.company?.name}</td>
                  <td className="p-3">{job.title}</td>
                  <td className="p-3">{job.createdAt.split("T")[0]}</td>
                  <td className="p-3 text-right">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div
                          onClick={() =>
                            navigate(`/admin/companies/${job._id}`)
                          }
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                        <div
                          onClick={() =>
                            navigate(`/admin/jobs/${job._id}/applicants`)
                          }
                          className="flex items-center gap-2 cursor-pointer mt-2"
                        >
                          <Eye className="w-4" />
                          <span>Applicants</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 mt-4">
        {filterJobs.length === 0 ? (
          <p className="text-center text-sm">You haven't posted any job yet!</p>
        ) : (
          filterJobs.map((job) => (
            <div
              key={job._id}
              className="border rounded-md p-4 shadow-sm space-y-2 text-sm"
            >
              <p>
                <span className="font-semibold">Company:</span>{" "}
                {job.company?.name}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {job.title}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {job.createdAt.split("T")[0]}
              </p>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => navigate(`/admin/companies/${job._id}`)}
                  className="flex items-center gap-1 text-blue-600"
                >
                  <Edit2 className="w-4" />
                  Edit
                </button>
                <button
                  onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                  className="flex items-center gap-1 text-green-600"
                >
                  <Eye className="w-4" />
                  Applicants
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminJobsTable;
