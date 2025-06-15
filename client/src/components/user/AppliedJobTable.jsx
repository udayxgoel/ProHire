import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const statusColorMap = {
  rejected: "bg-red-500",
  pending: "bg-yellow-500",
  accepted: "bg-green-500",
};

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  const sortedJobs = [...allAppliedJobs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center">
                You haven't applied for any job yet!
              </TableCell>
            </TableRow>
          ) : (
            sortedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>
                  {appliedJob.createdAt?.split("T")[0] || "-"}
                </TableCell>
                <TableCell>
                  <Link
                    to={`/description/${appliedJob.job?._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {appliedJob.job?.title || "-"}
                  </Link>
                </TableCell>
                <TableCell>{appliedJob.job?.company?.name || "-"}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={
                      statusColorMap[appliedJob?.status] || "bg-gray-300"
                    }
                  >
                    {appliedJob?.status?.toUpperCase() || "NA"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
