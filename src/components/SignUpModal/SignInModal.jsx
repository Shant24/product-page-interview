import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faApple } from '@fortawesome/free-brands-svg-icons';
import { signUp, signUpModalClose } from '../../store/actions/authActions';
import { facebookLogin } from '../../helpers/auth';
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

  const responseGoogleLoginSuccess = (response) => {
    signUp('google', response.profileObj);
  };

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
          <button className={styles.facebook} onClick={facebookLogin}>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Sign up with Facebook</span>
          </button>

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign up with Google"
            onSuccess={responseGoogleLoginSuccess}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            render={(renderProps) => (
              <button
                className={styles.google}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src={googleLogo} alt="google_logo" />
                <span>Sign up with Google</span>
              </button>
            )}
          />

          <button className={styles.apple} onClick={() => signUp('apple')}>
            <FontAwesomeIcon icon={faApple} />
            <span>Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { signUp, signUpModalClose })(memo(SignUpModal));
