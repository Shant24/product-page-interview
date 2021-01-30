import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import searchIcon from '../../assets/images/search-icon.png';
import SignUpModal from '../SignUpModal/SignInModal';
import { signUpModalOpen, logOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CloseIcon from '../svg/CloseIcon';

const Header = ({ isAuth, signUpModalISOpen, signUpModalOpen, logOut }) => {
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isSmallSize, setIsSmallSize] = useState(window.innerWidth <= 768);

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    // async fetch
    setSearchValue('');
  };

  const handleClickSignUp = () => {
    document.body.style.overflow = 'hidden';
    if (window.innerHeight < document.body.offsetHeight) {
      document.body.style.paddingRight = '17px';
    }
    signUpModalOpen();
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768 && !isSmallSize) {
        setIsSmallSize(true);
      } else if (window.innerWidth > 768 && isSmallSize) {
        setIsSmallSize(false);
        setMobileMenuIsOpen(false);
      }
    });
  }, [isSmallSize]);

  const toggleMobileModal = () => {
    if (mobileMenuIsOpen) {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    } else {
      document.body.style.overflow = 'hidden';

      if (window.innerHeight < document.body.offsetHeight) {
        document.body.style.paddingRight = '17px';
      }
    }

    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}></div>
      {!isSmallSize ? (
        <>
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
            {isAuth ? (
              <div className={styles.userMenu}>
                <Link to="/">My Account</Link>
                <div onClick={logOut}>Log out</div>
              </div>
            ) : (
              <div className={styles.signUpButton} onClick={handleClickSignUp}>
                sign up
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={styles.menuIcon} onClick={toggleMobileModal}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}

      <div
        className={`${styles.mobileMenu}${
          mobileMenuIsOpen ? ` ${styles.active}` : ''
        }`}
      >
        <div className={styles.menuIcon} onClick={toggleMobileModal}>
          <CloseIcon />
        </div>
        <form onSubmit={handleSubmit}>
          <label className={styles.searchIcon} htmlFor="searchInput2">
            <img src={searchIcon} alt="search-icon" />
          </label>
          <input
            id="searchInput2"
            onChange={handleChange}
            type="text"
            name="search"
            value={searchValue}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
        <div className={styles.userWrapper}>
          {isAuth ? (
            <>
              <div className={styles.userMenu}>
                <Link to="/">My Account</Link>
              </div>

              <div className={styles.logOutButton} onClick={logOut}>
                Log out
              </div>
            </>
          ) : (
            <div className={styles.signUpButton} onClick={handleClickSignUp}>
              sign up
            </div>
          )}
        </div>
      </div>

      {signUpModalISOpen && <SignUpModal />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  signUpModalISOpen: state.authData.signUpModalISOpen,
  isAuth: state.authData.isAuth,
});

export default connect(mapStateToProps, { signUpModalOpen, logOut })(
  memo(Header)
);
