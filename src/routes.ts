import { BASE_URL } from "./config";
import { PATH_AUTH_TYPE, SocialMediaLinksType } from "./types";

function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = `${BASE_URL}/auth`;
const ROOTS_DASHBOARD = `${BASE_URL}/dashboard`;

export const PATH_AUTH: PATH_AUTH_TYPE = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
};

export const SOCIAL_MEDIA_LINKS: SocialMediaLinksType = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  linkedIn: "https://www.linkedin.com/"
}