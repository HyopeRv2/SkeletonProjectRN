import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {navigationRef} from './services/RootNavigation';
import Router from './Router';
import configureStore from './redux/store';
import {Root} from 'native-base';

const {store, persistor} = configureStore();

import {LightTheme} from './styles/lightTheme';
import {DarkTheme} from './styles/darkTheme';
import {useEffect} from 'react';
import {getLanguages, getI18n} from './redux/actions/languagesActions';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

const Main = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state);
  console.log(stores);

  const themeRepo = useSelector((state) => state.theme);
  const languageRepo = useSelector((state) => state.languages);

  useEffect(() => {
    const languageRun = async () => {
      await dispatch(getLanguages());
    };

    if (!languageRepo.loaded) {
      languageRun();
    } else {
      dispatch(getI18n(languageRepo.languageTag));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const theme = themeRepo.type === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <Root>
          <Router theme={theme} />
        </Root>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
