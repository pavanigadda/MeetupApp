import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as upcomingEventActions from "../../redux/actions/upcomingEventActions";
import * as rsvpActions from "../../redux/actions/rsvpActions";
import UpcomingEventsList from "./UpcomingEventsList";
import UpcomingEventsDialog from "./UpcomingEventsDialog";

export class UpcomingEventsPage extends React.Component {
  state = {
    open: false
  };

  handleEventClick = eventId => {
    this.props.loadRsvps(eventId).then(() => {
      this.setState({ open: true });
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const { loadEvents } = this.props;
    loadEvents();
  }

  render() {
    const { upcomingEvents, rsvps } = this.props;
    const { open } = this.state;

    return (
      <div className="content-page">
        <UpcomingEventsList
          events={upcomingEvents}
          onEventClick={this.handleEventClick}
        />
        {open && (
          <UpcomingEventsDialog
            open={open}
            handleClose={this.handleClose}
            rsvps={rsvps}
          />
        )}
      </div>
    );
  }
}

UpcomingEventsPage.propTypes = {
  upcomingEvents: PropTypes.array.isRequired,
  rsvps: PropTypes.array.isRequired,
  loadEvents: PropTypes.func.isRequired,
  loadRsvps: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    upcomingEvents: state.upcomingEvents,
    rsvps: state.rsvps
  };
}
const mapDispatchToProps = {
  loadEvents: upcomingEventActions.fetchUpcomingEvents,
  loadRsvps: rsvpActions.fetchRsvpDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEventsPage);
