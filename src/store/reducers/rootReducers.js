import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducers = combineReducers({
  appData: appReducer,
  authData: authReducer,
  productData: productReducer,
});

export default rootReducers;
