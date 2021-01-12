import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {AppBar} from '../commons/AppBar';
import Block from '../commons/Block';

import {getAllUsers} from '../../redux/actions/usersActions';
import {connect, useSelector} from 'react-redux';
import {IconButton} from '../commons/IconButton';
import {CustomSpinner} from '../commons/CustomSpinner';
import {CustomText} from '../commons/CustomText';
import {CustomPageBack} from '../commons/CustomPageBack';

const UsersPage = ({navigation, userRepo, languageRepo, getAllUsers}) => {
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomPageBack
      marginHorizontal={5}
      header={
        <AppBar
          title={languageRepo.data.menu.users}
          leftChildren={
            <IconButton
              iconName={'th-list'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() => navigation.openDrawer()}
            />
          }
        />
      }>
      <Block flex={1} column>
        {!userRepo.loading && userRepo.loaded ? (
          userRepo.data.map((user) => {
            return <CustomText key={user.id}>{user.name}</CustomText>;
          })
        ) : (
          <CustomSpinner />
        )}
      </Block>
    </CustomPageBack>
  );
};

const mapStateToProps = (state) => {
  return {
    userRepo: state.users,
    languageRepo: state.languages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
