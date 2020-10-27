import { gql } from '@apollo/client';

const USER = gql`
  query user($login: String!) {
    user(login: $login) {
      avatarUrl
      bio
      company
      # contributionsCollection
      createdAt
      email
      followers(first: 0) {
        totalCount
      }
      following(first: 0) {
        totalCount
      }
      gists(first: 0) {
        totalCount
      }
      isBountyHunter
      isCampusExpert
      isDeveloperProgramMember
      isEmployee
      isHireable
      issues(first: 0) {
        totalCount
      }
      location
      name
      # get orgs data
      organizations(first: 0) {
        totalCount
      }
      # get packges data
      packages(first: 0) {
        totalCount
      }
      pullRequests(first: 0) {
        totalCount
      }
      repositories(first: 0) {
        totalCount
      }
      starredRepositories(first: 0) {
        totalCount
      }
      twitterUsername
      url
      websiteUrl
    }
  }
`;

export default USER;
