export const devUrl = (url) => {
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:3001${url}`;
  }
  return url;
};
