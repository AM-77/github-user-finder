import { IRepo, IStats, IInfos, IHighlights, IOrg } from '../types';

export const formatRepos = (repositories: any): IRepo[] => {
  return repositories.nodes.map((r: any) => ({
    url: r.url,
    name: r.name,
    description: r.description,
    languages: r.languages.nodes.map((l: any) => ({
      name: l.name,
      color: l.color,
    })),
    stargazers: r.stargazers.totalCount,
    homepageUrl: r.homepageUrl,
  }));
};

export const formatStats = (user: any): IStats => {
  return {
    commits: user.contributionsCollection.totalCommitContributions,
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    gists: user.gists.totalCount,
    issues: user.issues.totalCount,
    packages: user.packages.totalCount,
    pullRequests: user.pullRequests.totalCount,
    repositories: user.repositories.totalCount,
    stars: user.starredRepositories.totalCount,
  };
};

export const fromatHighlights = (user: any): IHighlights => {
  return {
    isBountyHunter: user.isBountyHunter,
    isCampusExpert: user.isCampusExpert,
    isDeveloperProgramMember: user.isDeveloperProgramMember,
    isEmployee: user.isEmployee,
    isHireable: user.isHireable,
  };
};

export const formatInfos = (user: any): IInfos => {
  return {
    bio:
      user.bio ||
      'Apparently, this user prefers to keep an air of mystery about them.',
    login: user.login,
    company: user.company || '',
    createdAt: user.createdAt,
    email: user.email || '',
    location: user.location || '',
    name: user.name || '',
    twitterUsername: user.twitterUsername || '',
    url: user.url,
    websiteUrl: user.websiteUrl || '',
  };
};

export const formatOrgs = (user: any): IOrg[] => {
  return user.organizations.nodes;
};
