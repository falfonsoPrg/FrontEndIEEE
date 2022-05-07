import * as React from 'react';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';


export default function AlertDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.clickYes}>{props.yes}</Button>
          <Button onClick={props.clickNo} autoFocus>
            {props.no}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
