import React, {useEffect, useState} from 'react';
import {AppBar} from '../commons/AppBar';
import Block from '../commons/Block';
import {useDispatch, useSelector} from 'react-redux';
import {CustomTextInput} from '../commons/CustomTextInput';
import {CustomButton} from '../commons/CustomButton';
import {CustomPageBack} from '../commons/CustomPageBack';
import {userLogin} from '../../redux/actions/userActions';

const LoginPage = ({navigation}) => {
  const languageRepo = useSelector((state) => state.languages);
  const [username, onChangeText] = useState();
  const dispatch = useDispatch();

  const cacheUser = async () => {
    if (username !== undefined) {
      if (username.length >= 3) {
        dispatch(userLogin({username: username}));
        navigation.replace('Main');
      }
    }
  };

  return (
    <CustomPageBack
      marginHorizontal={5}
      header={<AppBar title={languageRepo.data.menu.login} />}>
      <Block flex={1} column>
        <CustomTextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => onChangeText(text)}
          value={username}
        />

        <CustomButton
          text={languageRepo.data.process.login}
          onPress={() => cacheUser()}
        />
      </Block>
    </CustomPageBack>
  );
};

export default LoginPage;
