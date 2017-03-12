import { SET_DATE } from './actionTypes';

export function setDate(dates) {
  return {
    type: SET_DATE,
    payload: dates
  }
}
