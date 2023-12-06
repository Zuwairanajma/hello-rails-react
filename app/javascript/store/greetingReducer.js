// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import axios from "axios";

// // export const fetchGreeting = createAsyncThunk('greeting', async () => {
// //   const response = await axios.get("/api/random_greeting");
// //   console.log('Response:', response.data); 
// //   const greeting = response.data.greeting;
// //   return greeting;
// // });

// // export const greetingSlice = createSlice({
// //   name: "greeting",
// //   initialState: {
// //     greeting: "",
// //     loading: false,
// //     error: false,
// //   },

// //   extraReducers: (builder) => {
// //     builder.addCase(fetchGreeting.pending, (state, action) => {
// //       state.loading = true;
// //     }),
// //     builder.addCase(fetchGreeting.fulfilled, (state,action) => {
// //       state.loading = false;
// //       state.greeting = action.payload;
// //       console.log('Redux State after fetchGreeting.fulfilled:', state);
// //     }),

// //     builder.addCase(fetchGreeting.rejected, (state, action) => {
// //       state.error = true;
// //     }
// //     )
// //   },
// // });

// // export default greetingSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchGreeting = createAsyncThunk('greeting', async () => {
//   try {
//     const response = await fetch("http://127.0.0.1:3000/api/random_greeting");
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     const greeting = data.greeting;
//     console.log('Response:', data);

//     return greeting;
//   } catch (error) {
//     console.error('Error fetching greeting:', error.message);
//     throw error;
//   }
// });

// export const greetingSlice = createSlice({
//   name: "greeting",
//   initialState: {
//     greeting: "",
//     loading: false,
//     error: false,
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchGreeting.pending, (state) => {
//       state.loading = true;
//     }),
//     builder.addCase(fetchGreeting.fulfilled, (state, action) => {
//       state.loading = false;
//       state.greeting = action.payload;
//       console.log('Redux State after fetchGreeting.fulfilled:', state);
//     }),

//     builder.addCase(fetchGreeting.rejected, (state) => {
//       state.loading = false;
//       state.error = true;
//     });
//   },
// });

// export default greetingSlice.reducer;
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