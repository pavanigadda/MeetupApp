import * as upcomingEventActions from "./upcomingEventActions";
import * as types from "./actionTypes";
import mockUpcomingEventsData from "../../components/UpcomingEvents/mockTestData/mockUpcomingEventsData";
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
    ("should create FETCH_UPCOMING_EVENTS_SUCCESS action when loading events page",
    () => {
      // mocking an API call and setting the response body to our mock data instead of making a real API call
      fetchMock.mock("*", {
        body: mockUpcomingEventsData,
        headers: { "content-type": "application/json" }
      });

      const events = mockUpcomingEventsData.events;

      const expectedAction = {
        type: types.FETCH_UPCOMING_EVENTS_SUCCESS,
        data: events
      };

      const store = mockStore({ events: [] });
      return store
        .dispatch(upcomingEventActions.fetchUpcomingEvents())
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    })
  );
});

it("should create a FETCH_UPCOMING_EVENTS_SUCCESS action", () => {
  // arrange
  const events = mockUpcomingEventsData.events;
  const expectedAction = {
    type: types.FETCH_UPCOMING_EVENTS_SUCCESS,
    data: events
  };

  // act
  const action = upcomingEventActions.fetchUpcomingEventsSuccess(events);

  // assert
  expect(action).toEqual(expectedAction);
});
