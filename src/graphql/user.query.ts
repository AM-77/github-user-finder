import { gql } from '@apollo/client';
import getDate from '../utils/iso-date';

const { from, to } = getDate();
const USER = gql`
  query user($login: String!) {
    user(login: $login) {
      login
      avatarUrl
      bio
      company
      location
      name
      createdAt
      email
      twitterUsername
      url
      websiteUrl
      isBountyHunter
      isCampusExpert
      isDeveloperProgramMember
      isEmployee
      isHireable
      organizations(first: 100) {
        nodes {
          name
          avatarUrl
          url
        }
      }
      contributionsCollection(from: "${from}", to: "${to}"){
        totalCommitContributions
      }
      issues(first: 0) {
        totalCount
      }
      followers(first: 0) {
        totalCount
      }
      following(first: 0) {
        totalCount
      }
      gists(first: 0) {
        totalCount
      }
      # get packges data
      packages(first: 0) {
        totalCount
      }
      pullRequests(first: 0) {
        totalCount
      }
      repositories( first: 6, orderBy: { field: STARGAZERS,  direction: DESC } ){
        totalCount
        nodes {
          name
          url
          homepageUrl
          description
          languages(first: 3) {
            nodes{
              name
              color
            }
          }
          stargazers {
            totalCount
          }
        }
      }
      starredRepositories(first: 0) {
        totalCount
      }
    }
  }
`;

export default USER;
