import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginComponent } from './login.component';
import { linkRoutes, SessionContext } from 'core';
import { LoginEntityVm, createEmptyLogin } from './api/login.vm';
import { validateCredentials } from './api/login.api';
import { hideAlert, showAlert } from 'common/actions';
import SnackbarAlert from 'common/components/snackbar/snackbar.component';

export const LoginContainer = () => {
  const showSnackbar = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const { updateLogin } = React.useContext(SessionContext);

  const navigateToHotel = (loginInfo: LoginEntityVm) => {
    updateLogin(loginInfo.login);
    history.push(linkRoutes.hotelCollection);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password).then(
      (areValidCredentials) => {
        areValidCredentials
          ? navigateToHotel(loginInfo)
          : dispatch(showAlert());
      }
    );
  };

  const handleSnackbarClose = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} />
      <SnackbarAlert
        isVisible={showSnackbar}
        handleClose={handleSnackbarClose}
      />
    </>
  );
};
