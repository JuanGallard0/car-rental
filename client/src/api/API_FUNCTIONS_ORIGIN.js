export const API_FUNCTIONS_ORIGIN =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_URL_DEV
    : process.env.VUE_APP_URL_PROD;
