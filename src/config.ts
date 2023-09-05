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

const getlandingUrl = () => {
  const environment = getEnvironment();
  switch (environment) {
    case 'production':
      return APP_LANDING_URL_ENV_PRODUCTION;
    default:
      return APP_LANDING_URL_ENV_DEVELOPMENT;
  }
};

const getApiEndpoint = () => {
  const environment = getEnvironment();
  switch (environment) {
    case 'production':
      return API_URL_ENV_PRODUCTION;
    default:
      return API_URL_ENV_DEVELOPMENT;
  }
};

// App Base URL
const APP_BASE_URL_ENV_DEVELOPMENT = 'http://localhost:3031';
const APP_BASE_URL_ENV_PRODUCTION = 'https://app.heydev.ai';

// Landing Base URL
const APP_LANDING_URL_ENV_DEVELOPMENT = 'http://localhost:3000';
const APP_LANDING_URL_ENV_PRODUCTION = 'https://heydev.ai';

// API Base URL
const API_URL_ENV_DEVELOPMENT = 'http://localhost:5001';
const API_URL_ENV_PRODUCTION = 'https://api.heydev.ai';

// ENDPOINTS BEING USED
export const BASE_URL = getBaseUrl();
export const LANDING_URL = getlandingUrl();
export const API_URL = getApiEndpoint();
