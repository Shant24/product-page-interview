import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducers = combineReducers({ authData: authReducer });

export default rootReducers;
