import React from 'react';
import PropTypes from 'prop-types';
import { IRepo, ILanguage } from '../../types';
import starIcon from '../../assets/svg/star.svg';
import linkIcon from '../../assets/svg/link.svg';
import './style.scss';

type props = {
  repository: IRepo;
  isLoading: boolean;
};

const Repo: React.FC<props> = ({
  repository: { url, name, description, languages, stargazers, homepageUrl },
  isLoading,
}) => {
  return (
    <div className={`repo ${isLoading && 'shimmer'}`}>
      <a className="title" href={url} title={name}>
        <h4>{name}</h4>
      </a>
      <p className="description">{description}</p>
      <div className="languages">
        {languages.map((lang: ILanguage) => (
          <span
            key={lang.name}
            style={{ backgroundColor: lang.color }}
            className="language"
          >
            {lang.name}
          </span>
        ))}
      </div>
      <div className="foot">
        <p className="stars">
          <span className="value">{stargazers}</span>
          <img src={starIcon} alt="star" />
        </p>
        {homepageUrl && (
          <a href={homepageUrl} className="homepage">
            <img src={linkIcon} alt="link" />
          </a>
        )}
      </div>
    </div>
  );
};

Repo.propTypes = {
  repository: PropTypes.shape({
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
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Repo;
