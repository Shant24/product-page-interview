import store from '../store/store';
import { signUp, logOut } from '../store/actions/authActions';

export const statusChangeCallback = (response) => {
  if (response.status === 'connected') {
    store.dispatch(signUp('facebook', response.authResponse));
  }
  if (response.status === 'unknown') {
    store.dispatch(logOut());
  }
};

export const facebookLogin = () => {
  window.FB.login((response) => statusChangeCallback(response), {
    scope: 'public_profile,email',
  });
};

export const facebookLogout = () => {
  window.FB.logout((response) => statusChangeCallback(response));
};
