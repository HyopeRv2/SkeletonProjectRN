import React from 'react';
import Block from '../commons/Block';
import {AppBar} from '../commons/AppBar';
import {IconButton} from '../commons/IconButton';
import {CustomText} from '../commons/CustomText';
import {useSelector} from 'react-redux';
import {CustomPageBack} from '../commons/CustomPageBack';

const AboutUsPage = ({navigation}) => {
  const languageRepo = useSelector((state) => state.languages);

  return (
    <CustomPageBack
      marginHorizontal={5}
      header={
        <AppBar
          title={languageRepo.data.menu.about}
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
        <CustomText>About Us Page</CustomText>
      </Block>
    </CustomPageBack>
  );
};

export default AboutUsPage;
