import React from 'react';
import PropTypes from 'prop-types';
import { IStat } from '../../types';
import './style.scss';

type props = {
  stat: IStat;
  isLoading: boolean;
};

const StatCard: React.FC<props> = ({
  stat: { title, value, icon },
  isLoading,
}) => {
  return (
    <div className={`stat-card ${isLoading && 'shimmer'}`}>
      <h3 className="title">{title}</h3>
      <div className="value">
        <span>{value}</span>
        <img src={icon} alt={title} />
      </div>
    </div>
  );
};

StatCard.propTypes = {
  stat: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default StatCard;
