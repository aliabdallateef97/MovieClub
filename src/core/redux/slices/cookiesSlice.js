import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  lang: "en",
  dir: "ltr",
};

const cookiesSlice = createSlice({
  name: "cookies",
  initialState: initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") state.mode = "dark";
      else state.mode = "light";
    },
    changeLanguage: (state) => {
      if (state.lang === "ar") {
        state.lang = "en"
        state.dir = "ltr";
      }
      else {
        state.lang = "ar"
        state.dir = "rtl";
      }
    }
  },
});

export const { setMode, changeLanguage } = cookiesSlice.actions;
export default cookiesSlice.reducer;
