import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import * as recipesReducer from './recipes';

const reducers = Object.assign({ auth: AuthReducer }, recipesReducer);
export default combineReducers(
  reducers
);
/*
{
  auth: AuthReducer,
}*/
