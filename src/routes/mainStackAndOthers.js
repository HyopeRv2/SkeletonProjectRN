import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MainNavigation from './mainStack';
const MainAndOtherStack = createStackNavigator();

import OtherPage from '../components/pages/otherPage';

import {createStackNavigator} from '@react-navigation/stack';
import {authLogin} from '../redux/actions/authActions';

const MainAndOtherNavigation = () => {
  const languageRepo = useSelector((state) => state.languages);
  const userRepo = useSelector((state) => state.user);
  const authRepo = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userRepo.loaded && !authRepo.isLoggedIn) {
      dispatch(authLogin());
    }
  }, [userRepo]);

  return (
    <MainAndOtherStack.Navigator>
      <MainAndOtherStack.Screen
        name={'Main'}
        component={MainNavigation}
        options={{
          headerShown: false,
        }}
      />

      <MainAndOtherStack.Screen
        name={'Other'}
        component={OtherPage}
        options={{
          headerShown: false,
          title: languageRepo.data.menu.other,
        }}
      />
    </MainAndOtherStack.Navigator>
  );
};

export default MainAndOtherNavigation;
