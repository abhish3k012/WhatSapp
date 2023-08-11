import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const auth = createSlice({
  name: 'update',
  initialState,
  reducers: {
    addData: (state, action) => {
      console.log('======>', action);
      state.savedata = action.payload;
      console.log('+++++++++??????>>>>', action.payload);
    },
  },
});

export const {addData} = auth.actions;
export default auth.reducer;
