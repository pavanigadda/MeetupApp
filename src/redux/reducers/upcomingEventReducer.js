import * as actionTypes from "../actions/actionTypes";

export default function upcomingEventReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_UPCOMING_EVENTS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
