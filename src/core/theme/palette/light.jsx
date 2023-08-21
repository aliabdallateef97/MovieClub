import { sharedPalette } from "./shared";

export const lightPalette = {
  primary: {
    main: "#3B7EC5",
    dark: "#333333",
    light: "#ffffff",
    gray:"#F2F2F2"
  },
  secondary: {
    main: "#828282",
    light:"#FFFFFF",
    dark: "#BDBDBD",
  },
  background: {
    default: "#ffffff",
  },
  footerHeader:{
    main:'#e1d2d2'
  },
  ...sharedPalette,
};
