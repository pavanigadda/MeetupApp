import React from "react";
import { cleanup, render, getAllByText } from "react-testing-library";
import UpcomingEventsDialog from "./UpcomingEventsDialog";
import mockUpcomingEventsDialogData from "./mockTestData/mockUpcomingEventsDialogData";

// wiring up cleanup function to run after each test
afterEach(cleanup);

function renderUpcomingEventsDialog(args) {
  let defaultProps = {
    open: false,
    rsvps: [],
    handleClose: () => {},
    classes: {}
  };

  const props = { ...defaultProps, ...args };
  return render(<UpcomingEventsDialog {...props} />);
}

it("should render cancel button when dialog opened", () => {
  const { getByText } = renderUpcomingEventsDialog({ open: true });
  getByText("Cancel");
});

it("should load correct title of dialog when opened", () => {
  //mock data for event id = pbbdwnyzjbpb
  const mockRsvpDataOfEvent = mockUpcomingEventsDialogData.eventData;
  const { getByText } = renderUpcomingEventsDialog({
    open: true,
    rsvps: mockRsvpDataOfEvent
  });
  getByText("ReactJS Dallas meetup");
});
