// Authentication Enums
export const REGISTER = 'register';
export const REGISTER_SUCCESS = 'register_success';
export const REGISTER_FAILED = 'register_failed';

export const LOGIN = 'login';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILED = 'login_failed';

export const IS_LOGGED_IN = 'is_logged_in';

export const authLogin = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOGGED_IN,
      payload: true,
    });
  };
};

export const authLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOGGED_IN,
      payload: false,
    });
  };
};
