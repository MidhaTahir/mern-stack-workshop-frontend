export const apiRoute =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://deployedApiRoute";
