import React from 'react';
import PropTypes from 'prop-types';
import { IOrg } from '../../types';
import './style.scss';

type props = {
  orgs?: IOrg[];
  isLoading: boolean;
};

const Orgs: React.FC<props> = ({ orgs, isLoading }) => {
  const renderOrgs = (organizations: IOrg[]) => {
    if (organizations.length === 0)
      return (
        <div className="no-infos">
          <span>Does not belong to any org yet.</span>
        </div>
      );
    return organizations.map(({ url, name, avatarUrl }) => (
      <div className="org" key={url}>
        <a href={url} title={name}>
          <img src={avatarUrl} alt={name} />
        </a>
      </div>
    ));
  };

  return (
    <div className="organizations">
      <h2>
        Organizations <span>{orgs && orgs.length}</span>
      </h2>
      <div className={`orgs ${isLoading && 'shimmer'}`}>
        {orgs && renderOrgs(orgs)}
      </div>
    </div>
  );
};

Orgs.propTypes = {
  orgs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired
  ),
  isLoading: PropTypes.bool.isRequired,
};

Orgs.defaultProps = {
  orgs: [],
};

export default Orgs;
