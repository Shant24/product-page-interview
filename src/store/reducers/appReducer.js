// import * as appTypes from '../types/appTypes';

const initialState = {
  loading: false,
  errorMessage: null,
  successMessage: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'aaa':
      return state;

    default:
      return state;
  }
};

export default appReducer;
