import React from 'react';
import PropTypes from 'prop-types';
import { IStat } from '../../types';
import commitIcon from '../../assets/svg/commit.svg';
import followshipIcon from '../../assets/svg/followship.svg';
import repositorieIcon from '../../assets/svg/repositorie.svg';
import starIcon from '../../assets/svg/star.svg';
import packageIcon from '../../assets/svg/package.svg';
import pullRequestIcon from '../../assets/svg/pull-request.svg';
import issueIcon from '../../assets/svg/issue.svg';
import gistIcon from '../../assets/svg/gist.svg';
import StatCard from '../../components/StatCard/StatCard';

import './style.scss';

type props = {
  stats?: {
    commits: number;
    following: number;
    followers: number;
    repositories: number;
    stars: number;
    packages: number;
    pullRequests: number;
    issues: number;
    gists: number;
  };
  isLoading: boolean;
};

const Stats: React.FC<props> = ({ stats, isLoading }) => {
  if (stats) {
    const {
      commits,
      following,
      followers,
      repositories,
      stars,
      packages,
      pullRequests,
      issues,
      gists,
    } = stats;

    const allStats: IStat[] = [
      { title: 'commits', value: commits, icon: commitIcon },
      { title: 'following', value: following, icon: followshipIcon },
      { title: 'followers', value: followers, icon: followshipIcon },
      { title: 'stars', value: stars, icon: starIcon },
      { title: 'packages', value: packages, icon: packageIcon },
      { title: 'gists', value: gists, icon: gistIcon },
      { title: 'issues', value: issues, icon: issueIcon },
      { title: 'pull requests', value: pullRequests, icon: pullRequestIcon },
      { title: 'repositories', value: repositories, icon: repositorieIcon },
    ];

    return (
      <div className="stats">
        <h2>Profile statistics</h2>
        <div className="stats-container">
          {allStats.map((s) => (
            <StatCard stat={s} key={s.title} isLoading={isLoading} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="stats">
      <h4>There is nothing in the statistics field.</h4>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    commits: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    repositories: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    packages: PropTypes.number.isRequired,
    pullRequests: PropTypes.number.isRequired,
    issues: PropTypes.number.isRequired,
    gists: PropTypes.number.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
};

Stats.defaultProps = {
  stats: {
    commits: 0,
    following: 0,
    followers: 0,
    repositories: 0,
    stars: 0,
    packages: 0,
    pullRequests: 0,
    issues: 0,
    gists: 0,
  },
};

export default Stats;
