import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.profile?.profilePhoto} />
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-semibold text-lg sm:text-xl">
                {user?.fullname}
              </h1>
              <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <Button onClick={() => setOpen(true)} variant="outline" size="sm">
              <Pen className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
        </div>

        <div className="my-5 space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Contact className="w-4 h-4" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-md font-semibold mb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index} className="text-xs">
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-sm">NA</span>
            )}
          </div>
        </div>

        <div className="my-4">
          <Label className="text-md font-semibold block mb-1">Resume</Label>
          {user?.profile?.resume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.profile.resume}
              className="text-blue-500 text-sm hover:underline break-all"
            >
              {user.profile.resumeOriginalName}
            </a>
          ) : (
            <span className="text-sm">NA</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl px-4 sm:px-6 py-4">
        <h2 className="font-bold text-lg mb-4">Applied Jobs</h2>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
