import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faApple } from '@fortawesome/free-brands-svg-icons';
import { signUp, signUpModalClose } from '../../store/actions/authActions';
import styles from './signUpModal.module.scss';
import googleLogo from '../../assets/images/google-logo-icon.png';
import CloseIcon from '../svg/CloseIcon';

const SignUpModal = ({ signUp, signUpModalClose }) => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  });

  return (
    <div className={styles.signUpModal}>
      <div className={styles.signUpWrapper}>
        <div className={styles.closeButton} onClick={signUpModalClose}>
          <CloseIcon />
        </div>

        <h3>Create an Account</h3>

        <div className={styles.signUpText}>
          By creating an account, you'll be able to go forward
        </div>

        <div className={styles.buttonsContainer}>
          <button className={styles.facebook} onClick={signUp}>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Sign up with Facebook</span>
          </button>
          <button className={styles.google} onClick={signUp}>
            <img src={googleLogo} alt="google_logo" />
            <span>Sign up with Google</span>
          </button>
          <button className={styles.apple} onClick={signUp}>
            <FontAwesomeIcon icon={faApple} />
            <span>Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { signUp, signUpModalClose })(memo(SignUpModal));
