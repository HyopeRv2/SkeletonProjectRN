import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

import AuthenticationNavigation from './routes/authenticationStack';
import MainAndOtherNavigation from './routes/mainStackAndOthers';

const Router = () => {
  const userRepo = useSelector((state) => state.user);

  return (
    <RootStack.Navigator initialRouteName={userRepo.loaded ? 'Main' : 'Login'}>
      <RootStack.Screen
        name={'Login'}
        component={AuthenticationNavigation}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name={'Main'}
        component={MainAndOtherNavigation}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Router;
