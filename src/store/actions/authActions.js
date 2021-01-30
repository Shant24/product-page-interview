import * as authTypes from '../types/authTypes';

export const signUp = () => ({ type: authTypes.SIGN_UP_FETCH });

export const signUpSuccess = () => ({ type: authTypes.SIGN_UP_SUCCESS });

export const logOut = () => ({ type: authTypes.LOG_OUT });

export const signUpModalOpen = () => ({ type: authTypes.SIGN_UP_MODAL_SHOW });

export const signUpModalClose = () => ({ type: authTypes.SIGN_UP_MODAL_HIDE });
