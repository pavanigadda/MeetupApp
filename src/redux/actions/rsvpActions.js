import * as actionTypes from "./actionTypes";
import fetchJsonp from "fetch-jsonp";

export function fetchRsvpDetailsSuccess(rsvps) {
  return { type: actionTypes.FETCH_RSVP_DETAILS_SUCCESS, data: rsvps };
}

export function fetchRsvpDetails(eventId) {
  return function(dispatch) {
    return fetchJsonp(
      `https://api.meetup.com/reactjs-dallas/events/${eventId}/rsvps`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(fetchRsvpDetailsSuccess(json.data));
      })
      .catch(error => {
        console.log("fetching Rsvps failed", error);
      });
  };
}
