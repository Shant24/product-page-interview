import * as authTypes from '../types/authTypes';

export const signUp = (signUpType, data = null) => ({
  type: authTypes.SIGN_UP_FETCH,
  signUpType,
  data,
});

export const signUpSuccess = (signUpType, data) => ({
  type: authTypes.SIGN_UP_SUCCESS,
  signUpType,
  data,
});

export const logOut = () => ({ type: authTypes.LOG_OUT });

export const signUpModalOpen = () => ({ type: authTypes.SIGN_UP_MODAL_SHOW });

export const signUpModalClose = () => ({ type: authTypes.SIGN_UP_MODAL_HIDE });
