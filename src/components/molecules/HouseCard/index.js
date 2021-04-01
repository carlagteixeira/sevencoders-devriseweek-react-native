import React from 'react';
import {useHousesStore} from '../../../services/stores';
import {useNavigation} from '@react-navigation/native';
import {CardTitle, CardHightLightText, CardDescription} from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({imgSource, title, description, price, item}) => {
  const navigation = useNavigation();

  const {setSelectedHouse} = useHousesStore();

  const onClickItemContainer = () => {
    setSelectedHouse(item);
    navigation.navigate('Detail');
  };

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <CardContainer onPress={() => onClickItemContainer()}>
      <CardImage source={{uri: imgSource}} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>
            {formatedPrice.format(Number(price).toFixed(1))}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
