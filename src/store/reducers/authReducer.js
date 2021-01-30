import * as authTypes from '../types/authTypes';

const initialState = {
  isAuth: false,
  signUpModalISOpen: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_UP_SUCCESS:
      return { ...state, isAuth: true, signUpModalISOpen: false };

    case authTypes.LOG_OUT:
      return { ...state, isAuth: false };

    case authTypes.SIGN_UP_MODAL_SHOW:
      return { ...state, signUpModalISOpen: true };

    case authTypes.SIGN_UP_MODAL_HIDE:
      return { ...state, signUpModalISOpen: false };

    default:
      return state;
  }
};

export default authReducer;
