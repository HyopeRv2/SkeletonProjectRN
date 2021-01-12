import {replace} from '../../services/RootNavigation';

export const USER_LOGOUT = 'user_logout';
export const USER_LOGIN = 'user_login';

export const userLogin = (user) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN,
      payload: user,
    });
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGOUT,
    });

    replace('Login');
  };
};
