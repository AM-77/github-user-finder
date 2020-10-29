import React from 'react';
import PropTypes from 'prop-types';

import emailIcon from '../../assets/svg/email.svg';
import companyIcon from '../../assets/svg/company.svg';
import pinIcon from '../../assets/svg/pin.svg';
import twitterIcon from '../../assets/svg/twitter.svg';
import linkIcon from '../../assets/svg/link.svg';
import joinedIcon from '../../assets/svg/joined.svg';
import { IInfos } from '../../types';
import './style.scss';

type props = {
  infos: IInfos;
  isLoading: boolean;
};

const Bio: React.FC<props> = ({
  infos: {
    bio,
    company,
    createdAt,
    email,
    location,
    name,
    login,
    twitterUsername,
    url,
    websiteUrl,
  },
  isLoading,
}) => {
  return (
    <div className="bio">
      <div className={`infos ${isLoading && 'shimmer'}`}>
        <h2 className="name">{name}</h2>
        <a className="profile icon" href={url}>
          @{login}
        </a>
        <p className="content">{bio}</p>
      </div>
      <h2>Informations</h2>
      <div className={`links ${isLoading && 'shimmer'}`}>
        {company && (
          <div className="company icon">
            <img src={companyIcon} alt="company" />
            <span>{company}</span>
          </div>
        )}
        {email && (
          <a href={`mailto:${email}`} className="email icon">
            <img src={emailIcon} alt="email" />
            <span>{email}</span>
          </a>
        )}
        {websiteUrl && (
          <a href={websiteUrl} className="website icon">
            <img src={linkIcon} alt="link" />
            <span>{websiteUrl}</span>
          </a>
        )}
        {twitterUsername && (
          <div className="twitter icon">
            <img src={twitterIcon} alt="twitter" />
            <span>{twitterUsername}</span>
          </div>
        )}
        {location && (
          <div className="location icon">
            <img src={pinIcon} alt="location" />
            <span>{location}</span>
          </div>
        )}
        {createdAt && (
          <div className="joined icon">
            <img src={joinedIcon} alt="joined" />
            <span>{new Date(createdAt).toUTCString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

Bio.propTypes = {
  infos: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    twitterUsername: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    websiteUrl: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Bio;
