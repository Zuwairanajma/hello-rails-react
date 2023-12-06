import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  status: 'idle',
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:3000/api/greetings/random'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      return data.greeting;
    } catch (error) {
      throw new Error('Something went wrong with fetching quote');
    }
  }
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        status: 'done',
        value: action.payload,
      }))
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default greetingSlice.reducer;