import { BASE_URL } from "./config";
import { PATH_AUTH_TYPE, SocialMediaLinksType } from "./types";

function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = `${BASE_URL}/auth`;

export const PATH_AUTH: PATH_AUTH_TYPE = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
};

export const VSCODE_EXTENSION = "vscode://"
export const GITHUB_APP = "https://github.com/"

export const SOCIAL_MEDIA_LINKS: SocialMediaLinksType = {
  facebook: "https://www.facebook.com/people/HeyDev/100092936111060/",
  instagram: "https://www.instagram.com/heydev.ai/",
  linkedIn: "https://www.linkedin.com/company/heydev"
}