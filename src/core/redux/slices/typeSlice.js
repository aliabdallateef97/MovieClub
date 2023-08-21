import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tv:false,
  showSearch:false
};

const typeSlice = createSlice({
  name: "type",
  initialState: initialState,
  reducers: {
    setTv:(state)=>{
      state.tv = !state.tv
    },
    setShowSearch:(state)=>{
      state.showSearch = !state.showSearch
    }
  },
});

export const { setTv,setShowSearch } = typeSlice.actions;
export default typeSlice.reducer;
