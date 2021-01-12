import React, {useEffect, useState} from 'react';
import Block from '../commons/Block';
import {AppBar} from '../commons/AppBar';
import {IconButton} from '../commons/IconButton';
import {CustomText} from '../commons/CustomText';
import {CustomPageBack} from '../commons/CustomPageBack';
import {useSelector} from 'react-redux';

const ContactPage = ({navigation}) => {
  const languageRepo = useSelector((state) => state.languages);

  return (
    <CustomPageBack
      marginHorizontal={5}
      header={
        <AppBar
          title={languageRepo.data.menu.contacts}
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
        <CustomText>Contact Page</CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default ContactPage;
