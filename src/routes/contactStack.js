import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

const ContactStack = createStackNavigator();
import ContactPage from '../components/pages/contactPage';

const ContactNavigation = () => {
  const languageRepo = useSelector((state) => state.languages);

  return (
    <ContactStack.Navigator options={{headerShown: false}}>
      <ContactStack.Screen
        name="contacts"
        component={ContactPage}
        options={{
          headerShown: false,
          title: languageRepo.data.menu.contacts,
        }}
      />
    </ContactStack.Navigator>
  );
};
export default ContactNavigation;
