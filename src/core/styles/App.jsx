import styled from "@emotion/styled";

export const APPContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  background: theme.palette.background.default,
  color: theme.palette.primary.dark,
}));
