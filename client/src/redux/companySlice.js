import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "Company",
    initialState: {
        singleCompany: null,
        companies: [],
        searchCompanyByFilter: "",
    },
    reducers: {
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },
        searchCompanyByFilter: (state, action) => {
            state.searchCompanyByFilter = action.payload;
        },
    }
});

export const { setSingleCompany, setCompanies, searchCompanyByFilter } = companySlice.actions;
export default companySlice.reducer;