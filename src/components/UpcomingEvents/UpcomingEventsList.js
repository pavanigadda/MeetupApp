import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
    width: 0
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const UpcomingEventsList = props => {
  const { classes } = props;

  let convertDate = date => {
    const DATE_OPTIONS = {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    };
    return new Date(date).toLocaleString("en-US", DATE_OPTIONS);
  };

  return (
    <>
      <h1>Upcoming Events</h1>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Event Name</CustomTableCell>
              <CustomTableCell align="center">Date</CustomTableCell>
              <CustomTableCell align="center">Time</CustomTableCell>
              <CustomTableCell align="center">Venue</CustomTableCell>
              <CustomTableCell align="center">Address</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.events.map(event => (
              <TableRow
                className={classes.row}
                key={event.id}
                onClick={props.onEventClick.bind(null, event.id)}
              >
                <CustomTableCell component="th" scope="row">
                  {event.name}
                </CustomTableCell>
                <CustomTableCell align="center">
                  {convertDate(event.local_date)}
                </CustomTableCell>
                <CustomTableCell align="center">
                  {event.local_time}
                </CustomTableCell>
                <CustomTableCell align="center">
                  {event.venue.name}
                </CustomTableCell>
                <CustomTableCell align="center">
                  {`${event.venue.address_1}, ${event.venue.city}, ${
                    event.venue.state
                  }`}
                  {event.venue.zip ? `-${event.venue.zip}` : ""}
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

UpcomingEventsList.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onEventClick: PropTypes.func.isRequired
};

export default withStyles(styles)(UpcomingEventsList);
