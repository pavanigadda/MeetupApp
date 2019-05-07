import * as rsvpActions from "./rsvpActions";
import * as types from "./actionTypes";
import mockUpcomingEventsData from "../../components/UpcomingEvents/mockTestData/mockUpcomingEventsData";
import mockUpcomingEventsDialogData from "../../components/UpcomingEvents/mockTestData/mockUpcomingEventsDialogData";
import { thunk } from "redux-thunk";
import { fetchMock } from "fetch-mock";
import configureMockStore from "redux-mock-store";

// configure middleware to add thunk for async test
const mockStore = configureMockStore([thunk]);

describe("Thunk testing", () => {
  // initialize fecthMock after each store to keep it clean
  afterEach(() => {
    fetchMock.restore();
  });

  if (
    ("should create FETCH_RSVP_DETAILS_SUCCESS action when fetching event's rsvps",
    () => {
      // mocking an API call and setting the response body to our mock data instead of making a real API call
      fetchMock.mock("*", {
        body: mockUpcomingEventsDialogData,
        headers: { "content-type": "application/json" }
      });

      const event = mockUpcomingEventsData.events[1];
      const rsvps = mockUpcomingEventsDialogData.eventData[0];

      const expectedAction = {
        type: types.FETCH_RSVP_DETAILS_SUCCESS,
        data: rsvps
      };

      const store = mockStore({ rsvps: [] });
      return store.dispatch(rsvpActions.fetchRsvpDetails(event.id)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    })
  );
});

it("should create a FETCH_RSVP_DETAILS_SUCCESS action", () => {
  // arrange
  const event = mockUpcomingEventsData.events[1];
  const rsvps = mockUpcomingEventsDialogData.eventData[0];
  const expectedAction = {
    type: types.FETCH_RSVP_DETAILS_SUCCESS,
    data: rsvps
  };

  // act
  const action = rsvpActions.fetchRsvpDetailsSuccess(event);

  // assert
  expect(action.data.id).toEqual(expectedAction.data.event.id);
});
