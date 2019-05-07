import { createStore } from "redux";
import rootReducer from "./reducers";
import * as upcomingEventActions from "./actions/upcomingEventActions";
import * as rsvpActions from "./actions/rsvpActions";
import mockUpcomingEventsData from "../components/UpcomingEvents/mockTestData/mockUpcomingEventsData";
import mockUpcomingEventsDialogData from "../components/UpcomingEvents/mockTestData/mockUpcomingEventsDialogData";

it("Should handle fetching events", () => {
  // arrange
  const initialState = { upcomingEvents: [], rsvps: [] };
  const store = createStore(rootReducer, initialState);

  // act
  const action = upcomingEventActions.fetchUpcomingEventsSuccess(
    mockUpcomingEventsData.events
  );
  store.dispatch(action);

  // assert
  const firstEvent = store.getState().upcomingEvents[0];
  expect(firstEvent).toEqual(mockUpcomingEventsData.events[0]);
});

it("Should handle fetching events", () => {
  // arrange
  const initialState = { upcomingEvents: [], rsvps: [] };
  const store = createStore(rootReducer, initialState);

  // act
  const action = rsvpActions.fetchRsvpDetailsSuccess(
    mockUpcomingEventsDialogData.eventData
  );
  store.dispatch(action);

  // assert

  const firstEvent = store.getState().rsvps[0];
  expect(firstEvent).toEqual(mockUpcomingEventsDialogData.eventData[0]);
});
