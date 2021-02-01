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
import { GoogleLogout } from 'react-google-login';
import { facebookLogout } from '../../helpers/auth';

const Header = (props) => {
  const {
    isAuth,
    signUpModalISOpen,
    signUpModalOpen,
    logOut,
    facebookAuthData,
    googleAuthData,
    appleAuthData,
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isSmallSize, setIsSmallSize] = useState(window.innerWidth <= 768);

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

                {facebookAuthData && (
                  <button
                    className={styles.logOutButton}
                    onClick={facebookLogout}
                  >
                    Sign out
                  </button>
                )}
                {googleAuthData && (
                  <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={logOut}
                    cookiePolicy={'single_host_origin'}
                    render={(renderProps) => (
                      <button
                        className={styles.logOutButton}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Sign out
                      </button>
                    )}
                  />
                )}
                {appleAuthData && (
                  <button className={styles.logOutButton} onClick={logOut}>
                    Sign out
                  </button>
                )}
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

              {facebookAuthData && (
                <button
                  className={styles.logOutButton}
                  onClick={facebookLogout}
                >
                  Sign out
                </button>
              )}
              {googleAuthData && (
                <GoogleLogout
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={logOut}
                  cookiePolicy={'single_host_origin'}
                  render={(renderProps) => (
                    <button
                      className={styles.logOutButton}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Sign out
                    </button>
                  )}
                />
              )}
              {appleAuthData && (
                <button className={styles.logOutButton} onClick={logOut}>
                  Sign out
                </button>
              )}
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
  facebookAuthData: state.authData.facebook,
  googleAuthData: state.authData.google,
  appleAuthData: state.authData.apple,
});

export default connect(mapStateToProps, { signUpModalOpen, logOut })(
  memo(Header)
);
