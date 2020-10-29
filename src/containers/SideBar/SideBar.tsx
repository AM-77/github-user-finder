import React from 'react';
import PropTypes from 'prop-types';
import Bio from '../../components/Bio/Bio';
import Highlights from '../../components/Highlights/Highlights';
import Orgs from '../../components/Orgs/Orgs';
import { IInfos, IHighlights, IOrg } from '../../types';
import Avatar from '../../components/Avatar/Avatar';
import './style.scss';

type props = {
  avatarUrl?: string;
  infos?: IInfos;
  highlights?: IHighlights;
  orgs?: IOrg[];
  isLoading: boolean;
};

const SideBar: React.FC<props> = ({
  avatarUrl,
  infos,
  highlights,
  orgs,
  isLoading,
}) => {
  const voidInfos = {
    bio: '',
    company: '',
    createdAt: '',
    email: '',
    location: '',
    name: '',
    login: '',
    twitterUsername: '',
    url: '',
    websiteUrl: '',
  };

  const voidHighlights = {
    isBountyHunter: false,
    isCampusExpert: false,
    isDeveloperProgramMember: false,
    isEmployee: false,
    isHireable: false,
  };

  return (
    <div className="side-bar">
      <Avatar avatarUrl={avatarUrl || ''} isLoading={isLoading} />
      <Bio infos={infos || voidInfos} isLoading={isLoading} />
      <Highlights
        highlights={highlights || voidHighlights}
        isLoading={isLoading}
      />
      <Orgs orgs={orgs} isLoading={isLoading} />
    </div>
  );
};

SideBar.propTypes = {
  avatarUrl: PropTypes.string,
  infos: PropTypes.shape({
    bio: PropTypes.string,
    company: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    twitterUsername: PropTypes.string,
    url: PropTypes.string.isRequired,
    websiteUrl: PropTypes.string,
  }),
  highlights: PropTypes.shape({
    isBountyHunter: PropTypes.bool,
    isCampusExpert: PropTypes.bool,
    isDeveloperProgramMember: PropTypes.bool,
    isEmployee: PropTypes.bool,
    isHireable: PropTypes.bool,
  }),
  orgs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired
  ),
  isLoading: PropTypes.bool.isRequired,
};

SideBar.defaultProps = {
  avatarUrl: '',
  infos: {
    bio: '',
    company: '',
    createdAt: '',
    email: '',
    location: '',
    name: '',
    login: '',
    twitterUsername: '',
    url: '',
    websiteUrl: '',
  },
  highlights: {
    isBountyHunter: false,
    isCampusExpert: false,
    isDeveloperProgramMember: false,
    isEmployee: false,
    isHireable: false,
  },
  orgs: [],
};

export default SideBar;
