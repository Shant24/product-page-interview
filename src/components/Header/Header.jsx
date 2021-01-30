import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import searchIcon from '../../assets/images/search-icon.png';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    // async fetch
    setSearchValue('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}></div>
      <form onSubmit={handleSubmit}>
        <label className={styles.searchIcon} htmlFor="searchInput">
          <img src={searchIcon} alt="search-icon" />
        </label>
        <input
          id="searchInput"
          onChange={handleChange}
          type="text"
          name="search"
          value={searchValue}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.userWrapper}>
        <Link to="/">My Account</Link>
      </div>
    </header>
  );
};

export default memo(Header);
