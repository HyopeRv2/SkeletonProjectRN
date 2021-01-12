import React, {useEffect, useState} from 'react';
import {AppBar} from '../commons/AppBar';
import Block from '../commons/Block';
import {IconButton} from '../commons/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText} from '../commons/CustomText';
import {Toast} from 'native-base';
import {CustomPageBack} from '../commons/CustomPageBack';
import {CustomColoredIcon} from '../commons/CustomColoredIcon';
import {CustomIcon} from '../commons/CustomIcon';
import I18n from 'i18n-js';

const HomePage = ({navigation}) => {
  const userRepo = useSelector((state) => state.user);
  const languageRepo = useSelector((state) => state.languages);

  useEffect(() => {});

  return (
    <CustomPageBack
      marginHorizontal={5}
      header={
        <AppBar
          title={languageRepo.data.menu.home}
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
        <CustomText style={{fontSize: 20}}>
          User: {userRepo.data.username}
        </CustomText>

        <CustomText
          onPress={() => {
            navigation.push('Other');
          }}>
          Baska bir sayfaya geç.
        </CustomText>

        <CustomText
          onPress={() =>
            Toast.show({
              text: 'Hello!',
              buttonText: 'Okay',
            })
          }>
          Toast mesaj göster.
        </CustomText>

        <CustomColoredIcon name={'CircusAssistan'} size={50} />
        <CustomIcon asset name={'MiddleAgeArcher'} size={50} color={'#4ac'} />
        <CustomText onPress={() => Toast.show({text: 'asdasdasd'})}>
          {I18n.t('menuTitle.mainMenu')}
        </CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default HomePage;
