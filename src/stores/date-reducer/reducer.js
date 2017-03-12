import moment from "moment";
import { SET_DATE } from './actionTypes';
const INITIAL_STATE = { startDate: moment() , endDate: null}


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_DATE:
      return action.payload;
    default:
      return state;
  }
}
