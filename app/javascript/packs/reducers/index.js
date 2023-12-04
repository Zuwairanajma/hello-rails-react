// app/javascript/packs/reducers/index.js

import { combineReducers } from 'redux';
import greetingReducer from './greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
  // Add other reducers if needed
});

export default rootReducer;
