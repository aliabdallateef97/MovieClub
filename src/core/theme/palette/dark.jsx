import { sharedPalette } from "./shared";

export const darkPalette = {
  primary: {
    main: "#56CCF2",
    dark: "#ffffff",
    light: "#333333",
    gray:"#4F4F4F"
  }, 
  secondary: {
    main: "#BDBDBD",
    light:"#4F4F4F",
    dark: "#828282",
  },
  background: {
    default: "#333333",
  },
  footerHeader:{
    main:'#795757'
  },
  ...sharedPalette,
};
