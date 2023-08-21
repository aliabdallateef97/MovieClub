import React from "react";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { I18nProvider, ThemeProvider } from ".";
import { APPContainer } from "../styles/App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CssBaseline } from "@mui/material";
// import { Loader } from "../components";
import { ErrorBoundary } from "../components";



const queryClient = new QueryClient();

function RootProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CssBaseline />
          <APPContainer>
            <I18nProvider>
              <QueryErrorResetBoundary>
              <ErrorBoundary>
                  {/* <React.Suspense fallback={<Loader />}> */}
                    {children}
                    {/* </React.Suspense> */}
                    </ErrorBoundary>
              </QueryErrorResetBoundary>
            </I18nProvider>
          </APPContainer>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default RootProvider;
