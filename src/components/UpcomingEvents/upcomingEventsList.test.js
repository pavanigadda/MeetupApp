import React from "react";
import { cleanup, render, getAllByText } from "react-testing-library";
import UpcomingEventsList from "./UpcomingEventsList";
import mockUpcomingEventsData from "./mockTestData/mockUpcomingEventsData";

// wiring up cleanup function to run after each test
afterEach(cleanup);

function renderUpcomingEventsList(args) {
  let defaultProps = {
    classes: {},
    events: [],
    onEventClick: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<UpcomingEventsList {...props} />);
}

it("should render table with column name as Event Name", () => {
  const { getByText } = renderUpcomingEventsList({ open: true });
  getByText("Event Name");
});

it("should load correct venue in table once rendered", () => {
  //mock data for events
  const mockEventsData = mockUpcomingEventsData.events;
  const { getByText } = renderUpcomingEventsList({
    events: mockEventsData
  });
  getByText("DevMountain | Dallas");
});
