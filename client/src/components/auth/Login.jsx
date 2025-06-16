import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/api";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-gray-200 rounded-xl p-6 my-10 bg-white shadow-sm"
        >
          <h1 className="font-bold text-2xl mb-6 text-center text-[#1E88E5]">
            Login
          </h1>

          <div className="mb-4">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="udaygoel@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              required
            />
          </div>

          <div className="mb-4">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="***********"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              required
            />
          </div>

          <div className="mb-4">
            <Label className="mb-2 block">Role</Label>
            <RadioGroup className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <Button
              type="button"
              className="w-full my-4 bg-[#1E88E5] text-white"
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-4 bg-[#1E88E5] hover:bg-[#1565C0] text-white"
            >
              Login
            </Button>
          )}

          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#1E88E5] font-medium hover:underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
