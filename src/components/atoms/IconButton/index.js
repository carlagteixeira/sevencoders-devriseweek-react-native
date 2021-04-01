import React from 'react';
import {IconButtonContainer} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export const IconButton = ({transparent, iconName, onPress}) => {
  return (
    <IconButtonContainer onPress={onPress} transparent={transparent}>
      <Icon iconName={iconName} color="white" size={20} />
    </IconButtonContainer>
  );
};
