export interface IOrg {
  url: string;
  name: string;
  avatarUrl: string;
}

export interface IRepo {
  url: string;
  name: string;
  description?: string | null;
  languages: ILanguage[];
  stargazers: number;
  homepageUrl?: string | null;
}

export interface ILanguage {
  name: string;
  color: string;
}

export interface IStat {
  title: string;
  value: number;
  icon: string;
}

export interface IStats {
  commits: number;
  following: number;
  followers: number;
  repositories: number;
  packages: number;
  pullRequests: number;
  issues: number;
  gists: number;
  stars: number;
}

export interface IHighlights {
  isBountyHunter?: boolean | null;
  isCampusExpert?: boolean | null;
  isDeveloperProgramMember?: boolean | null;
  isEmployee?: boolean | null;
  isHireable?: boolean | null;
}

export interface IInfos {
  bio?: string | null;
  login: string;
  company?: string | null;
  createdAt?: string | null;
  email?: string | null;
  location?: string | null;
  name?: string | null;
  twitterUsername?: string | null;
  url: string;
  websiteUrl?: string | null;
}
