import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';

/*
  createBottomTabNavigator -> içerisinde swipe özelliği olmadığı içi material kullanıyoruz.
  tercihe bağlı olarak değiştirilebilir.
*/

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
import {TabBar} from '../components/commons/TabBar';
import {CustomIcon} from '../components/commons/CustomIcon';

import HomePage from '../components/pages/homePage';
import UsersPage from '../components/pages/usersPage';
import ChatsPage from '../components/pages/chatsPage';

const HomeNavigation = () => {
  const languageRepo = useSelector((state) => state.languages);
  const exitAction = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarPosition={'bottom'}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomePage}
        listeners={{
          focus: () =>
            BackHandler.addEventListener('hardwareBackPress', exitAction),
          blur: () =>
            BackHandler.removeEventListener('hardwareBackPress', exitAction),
        }}
        options={{
          tabBarLabel: languageRepo.data.menu.home,
          tabBarIcon: () => (
            <CustomIcon name={'home'} size={20} color={'#FFF'} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersPage}
        options={{
          tabBarLabel: languageRepo.data.menu.users,
          tabBarIcon: () => (
            <CustomIcon name={'users'} size={20} color={'#FFF'} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsPage}
        options={{
          tabBarLabel: languageRepo.data.menu.chats,
          tabBarIcon: () => (
            <CustomIcon name={'comments'} size={20} color={'#FFF'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
