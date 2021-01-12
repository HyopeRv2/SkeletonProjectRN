import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';

export const CHANGE_THEME = 'change_theme';

export const changeTheme = (type) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CHANGE_THEME,
      payload: type,
    });
  };
};

export const themeEpic = (action$) => {
  console.log(action$);

  return action$.pipe(
    ofType(CHANGE_THEME),
    mergeMap((action) => {
      console.log(action);
      return action.payload;
    }),
  );
};
