import { Button, Container, Typography } from "@mui/material";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        gap: "32px",
      }}
    >
      <Typography variant="h1" fontWeight={"bold"}>
        Something went wrong
      </Typography>
      <Typography variant="body1" fontSize={"24px"} color={"firebrick"}>
        {error.message}
      </Typography>

      <Button variant="outlined" size="medium" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Container>
  );
};

export default ErrorFallback;
