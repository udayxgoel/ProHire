import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  const { companies, searchCompanyByFilter } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = companies?.filter(
      (company) =>
        !searchCompanyByFilter ||
        company?.name
          ?.toLowerCase()
          .includes(searchCompanyByFilter.toLowerCase())
    );
    setFilterCompany(filtered);
  }, [companies, searchCompanyByFilter]);

  return (
    <div className="w-full px-2 sm:px-4">
      {/* Desktop Table */}
      <div className="hidden sm:block">
        <Table>
          <TableCaption>
            A list of your recent registered companies
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterCompany.length === 0 ? (
              <TableRow>
                <TableCell colSpan="4" className="text-center text-gray-500">
                  You haven't registered any company yet!
                </TableCell>
              </TableRow>
            ) : (
              filterCompany.map((company) => (
                <TableRow key={company._id}>
                  <TableCell>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={company.logo} />
                    </Avatar>
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.createdAt?.split("T")[0]}</TableCell>
                  <TableCell className="text-right">
                    <Popover>
                      <PopoverTrigger className="focus:outline-none">
                        <MoreHorizontal className="w-5 h-5" />
                      </PopoverTrigger>
                      <PopoverContent className="w-32 p-2">
                        <div
                          onClick={() =>
                            navigate(`/admin/companies/${company._id}`)
                          }
                          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded text-sm"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-4 mt-4">
        {filterCompany.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven't registered any company yet!
          </p>
        ) : (
          filterCompany.map((company) => (
            <div
              key={company._id}
              className="bg-white rounded-md p-4 shadow flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={company.logo} />
                </Avatar>
                <h2 className="font-semibold">{company.name}</h2>
              </div>
              <p className="text-sm text-gray-600">
                Created on: {company.createdAt?.split("T")[0]}
              </p>
              <button
                onClick={() => navigate(`/admin/companies/${company._id}`)}
                className="text-blue-600 text-sm self-start font-medium"
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompaniesTable;
