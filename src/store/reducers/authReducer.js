// import * as authTypes from '../types/appTypes';

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'aaa':
      return state;

    default:
      return state;
  }
};

export default authReducer;
