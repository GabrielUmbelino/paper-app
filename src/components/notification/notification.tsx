import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Snackbar } from '@material-ui/core';

export interface NotificationProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  isOpened: boolean;
  onClose: (isClosed: boolean) => void;
}
export const Notification = ({
  message,
  type,
  isOpened,
  onClose,
}: NotificationProps) => {
  const handleClose = (_event: React.SyntheticEvent | React.MouseEvent) => {
    onClose(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isOpened}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
