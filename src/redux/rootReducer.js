import { combineReducers } from '@reduxjs/toolkit';
import user from './features/userSlice';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;