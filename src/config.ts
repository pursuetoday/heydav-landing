// config.js

export const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'production';
    default:
      return 'development';
  }
};

const getBaseUrl = () => {
  const environment = getEnvironment();
  switch (environment) {
    case 'production':
      return APP_BASE_URL_ENV_PRODUCTION;
    default:
      return APP_BASE_URL_ENV_DEVELOPMENT;
  }
};

// App Base URL
const APP_BASE_URL_ENV_DEVELOPMENT = 'http://localhost:3031';
const APP_BASE_URL_ENV_PRODUCTION = 'https://app.heydev.ai/';

// ENDPOINTS BEING USED
export const BASE_URL = getBaseUrl();
