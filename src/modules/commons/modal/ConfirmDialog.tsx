import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import * as React from 'react';

export const ConfirmDialog = ({textMessage,handleConfirmAction,handleClose}:any) => {

  
    const handleAgreeAndClose = () => {
        handleConfirmAction();
        handleClose();
    }
      return (
        <div>
         
          <Dialog
            open={true}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              Hello my baby
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleAgreeAndClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}