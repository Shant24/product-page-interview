import * as authTypes from '../types/authTypes';

const initialState = {
  isAuth: false,
  signUpModalISOpen: false,
  facebook: null,
  google: null,
  apple: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuth: true,
        signUpModalISOpen: false,
        [action.signUpType]: action.data,
      };

    case authTypes.LOG_OUT:
      return initialState;

    case authTypes.SIGN_UP_MODAL_SHOW:
      return { ...state, signUpModalISOpen: true };

    case authTypes.SIGN_UP_MODAL_HIDE:
      return { ...state, signUpModalISOpen: false };

    default:
      return state;
  }
};

export default authReducer;
