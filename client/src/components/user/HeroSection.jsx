import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setsearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import amazon from "../../assets/amazon.png";
import google from "../../assets/google.png";
import meta from "../../assets/meta.png";
import microsoft from "../../assets/microsoft.png";
import netflix from "../../assets/netflix.png";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setsearchedQuery(query));
    navigate("/browse");
  };

  return (
    <>
      <div className="text-center bg-[#F4F7FA] p-6 mx-auto max-w-7xl mt-3 rounded">
        <div className="flex flex-col gap-5 my-10">
          <span className="mx-auto px-4 py-2 rounded-full bg-[#E3F2FD] text-[#1E88E5] font-medium shadow-sm">
            Your No.1 Hiring Platform 🔥
          </span>
          <h1 className="text-5xl font-bold text-[#2C3E50]">
            Search, Apply & <br /> Get Your{" "}
            <span className="text-[#1E88E5]">Dream Job</span> Today
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock endless possibilities with the best jobs at top companies.
            Your career is just one search away.
          </p>
          <div className="flex w-full max-w-xl mx-auto shadow-sm border border-gray-200 pl-3 rounded-full items-center gap-4 bg-white">
            <input
              type="text"
              placeholder="Find your dream job"
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none border-none w-full text-gray-800 px-2 rounded-full"
            />
            <Button
              onClick={searchJobHandler}
              className="rounded-r-full bg-[#1E88E5] hover:bg-[#1565C0] transition-colors px-5 py-2"
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-12 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 whitespace-nowrap">
            Trusted by
          </h1>
          <ul className="flex items-center justify-center gap-8 flex-wrap">
            <li>
              <img className="h-16 object-contain" src={google} alt="google" />
            </li>
            <li>
              <img
                className="h-16 object-contain"
                src={microsoft}
                alt="microsoft"
              />
            </li>
            <li>
              <img className="h-16 object-contain" src={meta} alt="meta" />
            </li>
            <li>
              <img
                className="h-16 object-contain"
                src={netflix}
                alt="Netflix"
              />
            </li>
            <li>
              <img className="h-16 object-contain" src={amazon} alt="amazon" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
