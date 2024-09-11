import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userCreated: false,
  userCreating: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    creatingUser: (state, action) => {
      state.userCreating = true;
      state.userCreated = false;
    },
    creatingUserSuccess: (state, action) => {
      statusbar.userCreating = false;
      state.userCreated = true;
    },
    creatingUserFailure: (state, action) => {
      state.userCreated = false;
      state.userCreating = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer, name } = userSlice;

export default reducer;
