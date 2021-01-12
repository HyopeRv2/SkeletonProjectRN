import React from 'react';
import {Spinner} from 'native-base';
import {useTheme} from '@react-navigation/native';

const CustomSpinner = () => {
  const {colors} = useTheme();

  return <Spinner color={colors.primary} />;
};

export {CustomSpinner};
