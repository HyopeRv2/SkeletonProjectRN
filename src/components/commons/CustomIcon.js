import React from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as UniColorIcons from '../icons/uniIcons';
import {globalStyles} from '../../styles/globalStyles';

const CustomIcon = ({
  name,
  size = globalStyles.defaultIconSize.fontSize,
  color,
  asset,
}) => {
  const {colors} = useTheme();
  const iconColor = color !== undefined ? color : colors.text;
  let TargetIcon;

  if (asset) {
    TargetIcon = UniColorIcons[name];
    return <TargetIcon height={size} width={size} color={iconColor} />;
  } else {
    return <Icon name={name} size={size} color={iconColor} />;
  }
};

export {CustomIcon};
