import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cityReducer from './reducers';

const reducer = combineReducers({ cityReducer});

export default configureStore({ reducer });