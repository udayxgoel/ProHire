import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Remote"],
  },
  {
    filterType: "Category",
    array: [
      "Software",
      "Marketing",
      "Design",
      "Sales",
      "HR",
      "Finance",
      "Other",
    ],
  },
  {
    filterType: "Experience",
    array: ["Intern", "Junior", "Mid", "Senior"],
  },
];

const FilterCard = ({ selectedFilters, setSelectedFilters }) => {
  const changeHandler = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const resetFilter = () => {
    setSelectedFilters({
      Location: "",
      Category: "",
      Experience: "",
    });
  };

  return (
    <div className="w-full bg-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 border-b-4 border-blue-600 inline-block pb-1">
        Filter Jobs
      </h1>

      {filterData.map((data, index) => (
        <RadioGroup
          key={index}
          value={selectedFilters[data.filterType]}
          onValueChange={(value) => changeHandler(data.filterType, value)}
          className="space-y-3 mb-6"
        >
          <h2 className="font-semibold text-lg">{data.filterType}</h2>
          {data.array.map((item, idx) => {
            const uid = `${data.filterType}-${idx}`;
            return (
              <div
                key={uid}
                className="flex items-center space-x-3 cursor-pointer hover:text-blue-600"
              >
                <RadioGroupItem
                  value={item}
                  id={uid}
                  className="ring-offset-2 ring-blue-500 focus:ring-2"
                />
                <Label htmlFor={uid} className="cursor-pointer select-none">
                  {item}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      ))}

      <button
        onClick={resetFilter}
        disabled={
          !selectedFilters.Location &&
          !selectedFilters.Category &&
          !selectedFilters.Experience
        }
        className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${
          selectedFilters.Location ||
          selectedFilters.Category ||
          selectedFilters.Experience
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        } transition-colors`}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterCard;
