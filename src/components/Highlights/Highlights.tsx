import React from 'react';
import PropTypes from 'prop-types';

import githubIcon from '../../assets/svg/github.svg';
import bugIcon from '../../assets/svg/bug-bounty.svg';
import hireIcon from '../../assets/svg/check.svg';
import compusIcon from '../../assets/svg/compus.svg';
import devIcon from '../../assets/svg/dev-member.svg';
import noInfosIcon from '../../assets/svg/issue.svg';
import { IHighlights } from '../../types';
import './style.scss';

type props = {
  highlights: IHighlights;
  isLoading: boolean;
};

const Highlights: React.FC<props> = ({
  highlights: {
    isBountyHunter,
    isCampusExpert,
    isDeveloperProgramMember,
    isEmployee,
    isHireable,
  },
  isLoading,
}) => {
  return (
    <div className="highlights">
      <h2>Highlights</h2>
      <div className={`infos ${isLoading && 'shimmer'}`}>
        {isBountyHunter && (
          <div className="bug icon">
            <img src={bugIcon} alt="Bounty Hunter" />
            <span>Bounty Hunter</span>
          </div>
        )}
        {isCampusExpert && (
          <div className="compus icon">
            <img src={compusIcon} alt="Github Campus Expert" />
            <span>GitHub Campus Expert</span>
          </div>
        )}
        {isDeveloperProgramMember && (
          <div className="dev icon">
            <img src={devIcon} alt="Developer Program Member" />
            <span>Developer Program Member</span>
          </div>
        )}
        {isEmployee && (
          <div className="github icon">
            <img src={githubIcon} alt="Stuff" />
            <span>STAFF</span>
          </div>
        )}
        {isHireable && (
          <div className="github icon">
            <img src={hireIcon} alt="hireable" />
            <span>Actively Looking For Job</span>
          </div>
        )}

        {!isBountyHunter &&
          !isCampusExpert &&
          !isDeveloperProgramMember &&
          !isEmployee &&
          !isHireable && (
            <div className="no-infos icon">
              <img src={noInfosIcon} alt="no infos" />
              <span>Nothing maintained here.</span>
            </div>
          )}
      </div>
    </div>
  );
};

Highlights.propTypes = {
  highlights: PropTypes.shape({
    isBountyHunter: PropTypes.bool.isRequired,
    isCampusExpert: PropTypes.bool.isRequired,
    isDeveloperProgramMember: PropTypes.bool.isRequired,
    isEmployee: PropTypes.bool.isRequired,
    isHireable: PropTypes.bool.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Highlights;
