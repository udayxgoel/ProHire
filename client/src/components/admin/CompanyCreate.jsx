import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/api";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const registerNewCompany = async () => {
    if (!companyName.trim()) return toast.error("Company name is required!");
    try {
      setLoading(true);
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <div className="my-10">
          <h1 className="font-bold text-2xl sm:text-3xl">Your Company Name</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            What would you like to give your company name? You can change this
            later.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            value={companyName}
            placeholder="JobHunt, Microsoft"
            className="w-full"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 my-10">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button
            onClick={registerNewCompany}
            className="w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? "Registering..." : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
