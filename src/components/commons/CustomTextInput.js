import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TextInput} from 'react-native';

const CustomTextInput = ({
  style,
  value,
  onChangeText,
  placeHolderText = 'Enter Text',
}) => {
  const {colors} = useTheme();
  const textStyle = [style, {color: colors.text}];

  return (
    <TextInput
      placeholder={placeHolderText}
      placeholderTextColor={colors.placeholderText}
      style={[style, {color: colors.text}]}
      onChangeText={
        onChangeText !== undefined ? (text) => onChangeText(text) : () => {}
      }
      value={value}
    />
  );
};

export {CustomTextInput};
