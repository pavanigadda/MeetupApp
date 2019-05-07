import * as actionTypes from "../actions/actionTypes";

export default function rsvpReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_RSVP_DETAILS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
