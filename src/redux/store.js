import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {createEpicMiddleware} from 'redux-observable';
// import {allEpics} from './epics';

import {usersReducer} from './reducers/usersReducer';
import {userReducer} from './reducers/userReducer';
import {themeReducer} from './reducers/themeReducer';
import {authReducer} from './reducers/authReducer';
import {languagesReducer} from './reducers/languagesReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'user', 'languages'],
};

// const epicMiddleware = createEpicMiddleware();
const combinedReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  theme: themeReducer,
  languages: languagesReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default function (initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk),
  );

  let persistor = persistStore(store);

  // epicMiddleware
  // epicMiddleware.run(allEpics);
  return {store, persistor};
}
