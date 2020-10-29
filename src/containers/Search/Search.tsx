import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/svg/search.svg';
import './style.scss';

type props = {
  setLookup: (value: string) => void;
  searchUser: () => void;
};

const Search: React.FC<props> = ({ setLookup, searchUser }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLookup(e.target.value);
  };

  return (
    <div className="search">
      <button className="button" type="button" onClick={searchUser}>
        <img src={searchIcon} alt="search" />
      </button>
      <input
        className="input"
        placeholder="Search GitHub ..."
        onChange={onInputChange}
      />
    </div>
  );
};

Search.propTypes = {
  setLookup: PropTypes.func.isRequired,
  searchUser: PropTypes.func.isRequired,
};

export default Search;
