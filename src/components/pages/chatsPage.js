import React, {useEffect, useState} from 'react';
import {AppBar} from '../commons/AppBar';
import Block from '../commons/Block';

import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '../commons/IconButton';
import {CustomSpinner} from '../commons/CustomSpinner';
import {getAllUsers} from '../../redux/actions/usersActions';
import {CustomText} from '../commons/CustomText';
import {CustomPageBack} from '../commons/CustomPageBack';

const ChatsPage = ({navigation}) => {
  const languageRepo = useSelector((state) => state.languages);
  const usersRepo = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomPageBack
      marginHorizontal={5}
      header={
        <AppBar
          title={languageRepo.data.menu.chats}
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
        {!usersRepo.loading && usersRepo.loaded ? (
          usersRepo.data.map((user) => {
            return <CustomText key={user.id}>{user.name}</CustomText>;
          })
        ) : (
          <CustomSpinner/>
        )}
      </Block>
    </CustomPageBack>
  );
};

export default ChatsPage;
