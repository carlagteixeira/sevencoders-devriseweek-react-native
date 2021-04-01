import React from 'react';
import {DetailText} from '../../atoms';
import {FeatureCardContainer} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const HouseFeatureCard = ({iconName, featureText}) => {
  return (
    <FeatureCardContainer>
      <Icon name={iconName} color="white" size={20} />
      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
