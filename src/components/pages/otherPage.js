import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Block from '../commons/Block';
import {AppBar} from '../commons/AppBar';
import {IconButton} from '../commons/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {CustomPageBack} from '../commons/CustomPageBack';

const OtherPage = ({navigation}) => {
  const languageRepo = useSelector((state) => state.languages);
  const dispatch = useDispatch();
  return (
    <CustomPageBack
      marginHorizontal={5}
      header={
        <AppBar
          title={languageRepo.data.menu.other}
          leftChildren={
            <IconButton
              iconName={'arrow-left'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() => navigation.pop()}
            />
          }
        />
      }>
      <Block flex={1} column>
        <Text>Other Page</Text>
      </Block>
    </CustomPageBack>
  );
};

export default OtherPage;
