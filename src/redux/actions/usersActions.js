import http from '../../core/base.api';

export const USERS_LOADING = 'users_loading';
export const USERS_COMPLETED = 'users_completed';
export const USERS_ERROR = 'users_error';

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: USERS_LOADING,
    });

    let result = await http
      .get('https://jsonplaceholder.typicode.com/users')
      .toArray();

    if (result[0]) {
      dispatch({
        type: USERS_ERROR,
        payload: result[0],
      });
    } else {
      let users = await result[1];

      dispatch({
        type: USERS_COMPLETED,
        payload: users,
      });
    }
  };
};
