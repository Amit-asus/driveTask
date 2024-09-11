import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  jobCreated: false,
  jobCreating: false,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    fetchJobs: (state) => {
      (state.loading = true), (state.jobs = []), (state.error = null);
    },
    fetchJobSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.jobs = action.payload.data;
    },
    fetchJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.jobs = [];
    },
    createJob: (state, action) => {
      console.log("myjobs", state.jobs);
      state.jobCreated = false;
      state.jobCreating = true;
      state.jobs = [...state.jobs, action.payload];
      console.log("myjobs", state.jobs);
    },
    createJobSuccess: (state, action) => {
      console.log("myjobs", state.jobs);
      state.jobCreated = true;
      state.jobCreating = false;
    },
    createJobFailure: (state, action) => {
      state.jobCreated = false;
      state.jobCreating = false;
    },
  },
});

export const { actions, reducer, name } = jobSlice;
export default reducer;
