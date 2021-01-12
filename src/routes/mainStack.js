import React from 'react';
import {useSelector} from 'react-redux';

import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import HomeNavigation from './homeStack';
import ContactNavigation from './contactStack';
import AboutUsNavigation from './aboutUsStack';

import {CustomDrawer} from '../components/commons/Drawer';
import {CustomIcon} from '../components/commons/CustomIcon';

const MainNavigation = () => {
  const languageRepo = useSelector((state) => state.languages);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={HomeNavigation}
        options={{
          headerShown: false,
          drawerLabel: languageRepo.data.menu.home,
          drawerIcon: () => <CustomIcon name={'home'} size={20} />,
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactNavigation}
        options={{
          headerShown: false,
          drawerLabel: languageRepo.data.menu.contacts,
          drawerIcon: () => <CustomIcon name={'phone'} size={20} />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutUsNavigation}
        options={{
          headerShown: false,
          drawerLabel: languageRepo.data.menu.about,
          drawerIcon: () => <CustomIcon name={'briefcase'} size={20} />,
        }}
      />
    </Drawer.Navigator>
  );
};
export default MainNavigation;
