import { combineReducers } from "redux";
import upcomingEvents from "./upcomingEventReducer";
import rsvps from "./rsvpReducer";

const rootReducer = combineReducers({
  upcomingEvents,
  rsvps
});

export default rootReducer;
