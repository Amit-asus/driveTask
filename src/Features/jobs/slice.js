import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
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
  },
});

export const { actions, reducer, name } = jobSlice;
export default reducer;
