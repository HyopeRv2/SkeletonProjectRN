import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

const AuthenticationStack = createStackNavigator();
import LoginPage from '../components/pages/loginPage';

const AuthenticationNavigation = () => {
  const languageRepo = useSelector((state) => state.languages);

  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        name="login"
        component={LoginPage}
        options={{
          headerShown: false,
          title: languageRepo.data.menu.login,
        }}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigation;
