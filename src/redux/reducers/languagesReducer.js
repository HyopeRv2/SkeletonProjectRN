import en from '../../helpers/languages/en';
import {
  LANGUAGES_LOADING,
  LANGUAGES_LOADED,
  LANGUAGES_COMPLETED,
  LANGUAGES_ERROR,
  LANGUAGE_CHANGE,
} from '../actions/languagesActions';

const initialState = {
  data: en,
  languageTag: 'en',
  languageRtl: false,
  languages: [
    {key: 'tr', value: 'Türkçe'},
    {key: 'en', value: 'English'},
  ],
  loading: false,
  loaded: false,
  error: null,
};

export const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGES_LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case LANGUAGES_LOADED:
      return {
        ...state,
        loading: false,
        loaded: true,
      };

    case LANGUAGE_CHANGE:
    case LANGUAGES_COMPLETED:
      return {
        ...state,
        data: action.payload.data,
        languageTag: action.payload.languageTag,
        languageRtl: action.payload.languageRtl,
        loading: false,
        loaded: true,
      };

    case LANGUAGES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
};
