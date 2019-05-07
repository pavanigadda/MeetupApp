import rsvpReducer from "./rsvpReducer";
import * as actions from "../actions/rsvpActions";
import mockUpcomingEventsDialogData from "../../components/UpcomingEvents/mockTestData/mockUpcomingEventsDialogData";

it("should fetch events on FETCH_UPCOMING_EVENTS_SUCCESS", () => {
  // arrange
  const initialState = [];

  const response = mockUpcomingEventsDialogData.eventData;

  const action = actions.fetchRsvpDetailsSuccess(response);

  // act
  const newState = rsvpReducer(initialState, action);

  // assert
  expect(newState.length).not.toBe(0);
});
