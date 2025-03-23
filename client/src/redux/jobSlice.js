import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByFilter: "",
        allAppliedJobs: [],
        searchedQuery: "",
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        searchJobByFilter: (state, action) => {
            state.searchJobByFilter = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        },
        setsearchedQuery: (state, action) => {
            state.searchedQuery = action.payload;
        }
    }
});

export const { setAllJobs, setSingleJob, setAllAdminJobs, searchJobByFilter, setAllAppliedJobs, setsearchedQuery } = jobSlice.actions;
export default jobSlice.reducer;