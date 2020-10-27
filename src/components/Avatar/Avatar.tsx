import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

type props = {
  avatarUrl?: string;
  isLoading: boolean;
};

const Avatar: React.FC<props> = ({ avatarUrl, isLoading }) => {
  return (
    <div className={`avatar ${isLoading ? 'shimmer' : ''}`}>
      {avatarUrl && <img src={avatarUrl} alt="user avatar" />}
    </div>
  );
};

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

Avatar.defaultProps = {
  avatarUrl: '',
};

export default Avatar;
