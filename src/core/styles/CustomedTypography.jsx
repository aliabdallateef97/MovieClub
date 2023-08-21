import { Typography, styled } from "@mui/material";

export const DarkTypography = styled(Typography)(
  ({ theme, responsive }) => ({
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: responsive ? responsive : "16px",
    },
  })
);

export const GrayTypography = styled(Typography)(({ theme, responsive }) => ({
  color: theme.palette.secondary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: responsive ? responsive : "16px",
  },
}));



export const WhiteTypography = styled(Typography)(({ theme, responsive }) => ({
  color: theme.palette.primary.light,
  [theme.breakpoints.down("sm")]: {
    fontSize: responsive ? responsive : "16px",
  },
}));
