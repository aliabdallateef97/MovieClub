import React from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { prefixer } from "stylis";
// import { CacheProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { themeSettings } from "@/core/theme";
import { createTheme } from "@mui/material/styles";
// import rtlPlugin from "stylis-plugin-rtl";
// import createCache from "@emotion/cache";
import * as selectors from "@/core/config/import/selectors";



function ThemeContextProvider({ children }) {
  const direction = useSelector(selectors.appDirection);
  const mode = useSelector(selectors.appMode);

  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

//   const cacheRtl = createCache({
//     key: "muirtl",
//     stylisPlugins: [prefixer, rtlPlugin],
//   });

//   const cacheLtr = createCache({
//     key: "muiltr",
//     stylisPlugins: [prefixer],
//   });

//   const cache = direction === "ltr" ? cacheLtr : cacheRtl;

  return (
    
    //    <CacheProvider value={cache}>
        <ThemeProvider
          theme={createTheme(themeSettings(mode, direction))}
        >
          {children}
        </ThemeProvider>
    //    </CacheProvider>
  );
}

export default ThemeContextProvider;
