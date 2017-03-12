import { combineReducers } from 'redux';
import DateReducer from './date-reducer/reducer';

const rootReducer = combineReducers({
  dates: DateReducer
});

export default rootReducer;
