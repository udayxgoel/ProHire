import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  BriefcaseBusiness,
  Building,
  CheckCheck,
  LogOut,
  Menu,
  User2,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/api";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <CheckCheck className="text-[#1E88E5] w-7 h-7" />
          <h1 className="text-xl font-bold text-[#1E88E5]">
            ProHire <span className="text-[#2C3E50]">Jobs</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#1E88E5] hover:bg-[#1565C0]">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-700">
                Hi, {user.fullname}
              </span>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname || "User Avatar"}
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div>
                    <div className="flex gap-4 items-center">
                      <Avatar>
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt={user?.fullname}
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user?.fullname}</h4>
                        <p className="text-sm text-muted-foreground">
                          {user?.bio}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col mt-4 text-gray-600">
                      {user?.role === "student" && (
                        <Link to="/profile">
                          <Button variant="ghost" className="w-full text-left">
                            <User2 className="inline mr-2" />
                            View Profile
                          </Button>
                        </Link>
                      )}

                      {user?.role === "recruiter" && (
                        <>
                          <Link to="/admin/companies">
                            <Button
                              variant="ghost"
                              className="w-full text-left"
                            >
                              <Building className="inline mr-2" />
                              Manage Companies
                            </Button>
                          </Link>
                          <Link to="/admin/jobs">
                            <Button
                              variant="ghost"
                              className="w-full text-left"
                            >
                              <BriefcaseBusiness className="inline mr-2" />
                              Manage Jobs
                            </Button>
                          </Link>
                        </>
                      )}

                      <Button
                        variant="ghost"
                        className="w-full text-left text-red-600"
                        onClick={logoutHandler}
                      >
                        <LogOut className="inline mr-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="px-4 pb-4 md:hidden">
          {!user ? (
            <div className="flex flex-col gap-3">
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#1E88E5] w-full hover:bg-[#1565C0]">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-gray-700">
              <p className="font-semibold">Hi, {user.fullname}</p>

              {user?.role === "student" && (
                <Link to="/profile">
                  <Button variant="ghost" className="w-full text-left">
                    <User2 className="inline mr-2" />
                    View Profile
                  </Button>
                </Link>
              )}

              {user?.role === "recruiter" && (
                <>
                  <Link to="/admin/companies">
                    <Button variant="ghost" className="w-full text-left">
                      <Building className="inline mr-2" />
                      Manage Companies
                    </Button>
                  </Link>
                  <Link to="/admin/jobs">
                    <Button variant="ghost" className="w-full text-left">
                      <BriefcaseBusiness className="inline mr-2" />
                      Manage Jobs
                    </Button>
                  </Link>
                </>
              )}

              <Button
                variant="ghost"
                className="w-full text-left text-red-600"
                onClick={logoutHandler}
              >
                <LogOut className="inline mr-2" />
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
