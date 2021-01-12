import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

const AboutStack = createStackNavigator();
import AboutUsPage from '../components/pages/aboutUsPage';

const AboutUsNavigation = () => {
  const languageRepo = useSelector((state) => state.languages);

  return (
    <AboutStack.Navigator options={{headerShown: false}}>
      <AboutStack.Screen
        name="About"
        component={AboutUsPage}
        options={{
          headerShown: false,
          title: languageRepo.data.menu.about,
        }}
      />
    </AboutStack.Navigator>
  );
};

export default AboutUsNavigation;
