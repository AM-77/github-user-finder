import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../../components/Repo/Repo';
import { IRepo } from '../../types';
import './style.scss';

type props = {
  repos?: IRepo[];
  isLoading: boolean;
};

const Repos: React.FC<props> = ({ repos, isLoading }) => {
  return (
    <div className="repos">
      <h2>Top repositories</h2>
      <div className="top">
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="repo shimmer" />
          ))}
        {repos &&
          repos.length > 0 &&
          repos.map((repository) => (
            <Repo
              isLoading={isLoading}
              repository={repository}
              key={repository.name}
            />
          ))}
        {!isLoading && repos && repos.length === 0 && (
          <p className="no-repo">This user does not have any repository yet.</p>
        )}
      </div>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      stargazers: PropTypes.number.isRequired,
      homepageUrl: PropTypes.string,
    }).isRequired
  ),
  isLoading: PropTypes.bool.isRequired,
};

Repos.defaultProps = {
  repos: [],
};

export default Repos;
