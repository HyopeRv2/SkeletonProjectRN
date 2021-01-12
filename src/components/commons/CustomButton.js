import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {CustomSpinner} from './CustomSpinner';

const CustomButton = ({
  spinner = false,
  text,
  onPress,
  backgroundColor,
  flex,
  marginHorizontal,
}) => {
  const {colors} = useTheme();

  let {buttonWrapper} = styles;
  buttonWrapper = {
    ...buttonWrapper,
    backgroundColor: backgroundColor || colors.primary,
  };

  return (
    <View
      style={[
        styles.buttonBack,
        {
          flex: flex !== undefined ? 1 : 0,
          marginHorizontal: marginHorizontal !== undefined ? 5 : 0,
        },
      ]}>
      <View style={buttonWrapper}>
        <TouchableHighlight
          style={styles.buttonTouch}
          underlayColor={colors.hoverShadow}
          onPress={onPress}>
          <View>
            {spinner ? (
              <CustomSpinner color={'#FFF'} />
            ) : (
              <Text style={styles.buttonText}>{text}</Text>
            )}
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    height: 65,
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 25,
    height: 45,
  },
  buttonTouch: {
    height: '100%',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFF',
  },
});

export {CustomButton};
