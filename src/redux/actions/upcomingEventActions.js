import * as actionTypes from "./actionTypes";
import fetchJsonp from "fetch-jsonp";

export function fetchUpcomingEventsSuccess(events) {
  return { type: actionTypes.FETCH_UPCOMING_EVENTS_SUCCESS, data: events };
}

export function fetchUpcomingEvents() {
  return function(dispatch) {
    return fetchJsonp("https://api.meetup.com/reactjs-dallas/events")
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(fetchUpcomingEventsSuccess(json.data));
      })
      .catch(error => {
        console.log("fetching upcoming events failed", error);
      });
  };
}
