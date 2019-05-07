import upcomingEventReducer from "./upcomingEventReducer";
import * as actions from "../actions/upcomingEventActions";
import mockUpcomingEventsData from "../../components/UpcomingEvents/mockTestData/mockUpcomingEventsData";

it("should fetch events on FETCH_UPCOMING_EVENTS_SUCCESS", () => {
  // arrange
  const initialState = [];

  const response = mockUpcomingEventsData.events;

  const action = actions.fetchUpcomingEventsSuccess(response);

  // act
  const newState = upcomingEventReducer(initialState, action);

  // assert
  expect(newState.length).not.toBe(0);
});
