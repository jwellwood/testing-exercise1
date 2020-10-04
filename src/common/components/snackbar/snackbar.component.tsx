import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface Props {
  isVisible: boolean;
  handleClose: () => void;
}

const SnackbarAlert: React.FC<Props> = ({ isVisible, handleClose }) => {
  return (
    <Snackbar open={isVisible} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='warning'>
        Invalid credentials! Try again.
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
