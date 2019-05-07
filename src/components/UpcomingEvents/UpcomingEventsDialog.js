import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = {
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

class UpcomingEventsDialog extends React.Component {
  render() {
    const { open, handleClose, rsvps, classes } = this.props;
    const eventName = rsvps.length > 0 ? rsvps[0].event.name : "";

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" align="center">
            {eventName}
          </DialogTitle>
          <DialogContent>
            {rsvps.map(rsvp => (
              <span className="rsvp-names" key={rsvp.member.id}>
                <span className="rsvp-inline">
                  <Avatar
                    alt={rsvp.member.name}
                    src={rsvp.member.photo ? rsvp.member.photo.thumb_link : ""}
                    className={classes.bigAvatar}
                  />
                </span>
                <span className="rsvp-inline vertical-align">
                  <Typography variant="h6" component="h3">
                    {rsvp.member.name}
                  </Typography>
                  <Typography variant="h6" component="h3">{`Response: ${
                    rsvp.response
                  }`}</Typography>
                </span>
              </span>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

UpcomingEventsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  rsvps: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpcomingEventsDialog);
