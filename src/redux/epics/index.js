import {combineEpics} from 'redux-observable';
import {themeEpic} from '../actions/themeActions';

export const allEpics = combineEpics(themeEpic);
