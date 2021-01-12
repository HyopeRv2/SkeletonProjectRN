import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';

const CustomText = ({style, children, onPress}) => {
  const {colors} = useTheme();
  const textStyle = [style, {color: colors.text}];

  return (
    <Text onPress={onPress} style={textStyle}>
      {children}
    </Text>
  );
};

export {CustomText};
