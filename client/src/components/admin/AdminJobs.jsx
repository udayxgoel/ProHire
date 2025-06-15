import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { searchJobByFilter } from "@/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchJobByFilter(input));
  }, [input, dispatch]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Top filter & button */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          <Input
            className="w-full md:w-[300px]"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => navigate("/admin/jobs/create")}
            className="w-full md:w-auto"
          >
            New Job
          </Button>
        </div>

        {/* Jobs Table */}
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
