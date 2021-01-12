import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';

import tr from '../../helpers/languages/tr';
import en from '../../helpers/languages/en';
const languages = {
  tr: tr,
  en: en,
};

export const LANGUAGES_LOADING = 'languages_loading';
export const LANGUAGES_LOADED = 'languages_loaded';
export const LANGUAGES_COMPLETED = 'languages_completed';
export const LANGUAGES_ERROR = 'languages_error';
export const LANGUAGE_CHANGE = 'languages_change';

export const setI18nConfig = (tag) => {
  let arr = tag ? [tag] : ['en', 'tr'];

  const locales = RNLocalize.findBestAvailableLanguage(arr);
  const languageTag = locales.languageTag;
  const languageRtl = locales.isRTL;

  I18n.locale = languageTag;
  I18nManager.forceRTL(languageRtl);
  I18n.fallbacks = true;
  I18n.locales.no = 'en';
  I18n.translations = {
    en,
    tr,
  };

  return locales;
};

export const getI18n = (tag) => {
  return async (dispatch) => {
    dispatch({
      type: LANGUAGES_LOADING,
    });

    setI18nConfig(tag);

    dispatch({
      type: LANGUAGES_LOADED,
    });
  };
};

export const getLanguages = () => {
  return async (dispatch) => {
    dispatch({
      type: LANGUAGES_LOADING,
    });

    try {
      const locales = setI18nConfig();

      dispatch({
        type: LANGUAGES_COMPLETED,
        payload: {
          data: languages[locales.languageTag],
          languageTag: locales.languageTag,
          languageRtl: locales.isRTL,
        },
      });
    } catch (err) {
      console.log(err.toString());

      dispatch({
        type: LANGUAGES_ERROR,
        payload: err.toString(),
      });
    }
  };
};

export const changeLanguage = (tag) => {
  return async (dispatch) => {
    const locales = RNLocalize.findBestAvailableLanguage([tag]);
    const languageTag = locales.languageTag;
    const languageRtl = locales.isRTL;

    I18n.locale = languageTag;
    I18nManager.forceRTL(languageRtl);

    dispatch({
      type: LANGUAGE_CHANGE,
      payload: {
        data: languages[languageTag],
        languageTag: languageTag,
        languageRtl: languageRtl,
      },
    });
  };
};
