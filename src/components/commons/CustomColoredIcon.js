import React from 'react';
import * as MultiColorIcons from '../icons/multiIcons';
import {globalStyles} from '../../styles/globalStyles';

const CustomColoredIcon = ({
  name,
  size = globalStyles.defaultIconSize.fontSize,
}) => {
  const TargetIcon = MultiColorIcons[name];

  return <TargetIcon height={size} width={size} />;
};

export {CustomColoredIcon};
