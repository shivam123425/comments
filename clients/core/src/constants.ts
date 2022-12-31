export const getWebAppUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://www.app.comments.xyz";
  }
  return "http://localhost:4000";
};
