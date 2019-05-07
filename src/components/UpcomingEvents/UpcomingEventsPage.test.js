import React from "react";
import { mount } from "enzyme";
import { UpcomingEventsPage } from "./UpcomingEventsPage";
import mockUpcomingEventsData from "./mockTestData/mockUpcomingEventsData";

function render(args) {
  const defaultProps = {
    upcomingEvents: [],
    rsvps: [],
    loadEvents: jest.fn(),
    loadRsvps: jest.fn()
  };

  const props = { ...defaultProps, ...args };
  return mount(<UpcomingEventsPage {...props} />);
}

it("sets title of event list page correctly when rendered", () => {
  const wrapper = render();
  const upcomingEventsHeader = wrapper.find("h1").first();
  expect(upcomingEventsHeader.text()).toBe("Upcoming Events");
});
