import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";



export const createStudentRegister = createAsyncThunk(
  "student/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/auth/student/register", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);


const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    register: {},
    error: false,
    success: false,
    errorMessage: "",
  },
  reducers: {
    registrationClean: (state) => {
      state.error = false;
      state.errorMessage = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createStudentRegister.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(createStudentRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.register = action.payload;
      state.errorMessage = "";
      state.success = true;
    });
    builder.addCase(createStudentRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});
export const { registrationClean } = registerSlice.actions;
export default registerSlice.reducer;