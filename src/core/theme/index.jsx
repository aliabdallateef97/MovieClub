import { breakpoints } from "./breakpoints";
import { darkPalette } from "./palette/dark";
import { lightPalette } from "./palette/light";
import {fonts} from './fonts'


export const themeSettings = (mode, dir) => {
  return {
    direction: dir,
    palette: {
      mode: mode,
      ...(mode === "dark" ? { ...darkPalette } : { ...lightPalette }),
    },
    typography:
      dir === "rtl"
        ? { ...fonts, fontFamily: "Almarai,sans-serif" }
        : { ...fonts, fontFamily: "Poppins,sans-serif" },
    breakpoints: { ...breakpoints },
  };
};
