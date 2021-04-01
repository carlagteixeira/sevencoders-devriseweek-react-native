import React, {useEffect, useState} from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ScreenScroll,
  ContentContainer,
} from './styles';
import {Title, IconButton, Input, HousesList, Loader} from '../../components';
import {getHousesCall} from '../../services/calls';
import {jsonHouses} from '../../../public/data.js';
import {useHousesStore} from '../../services/stores';

export const HomeScreen = () => {
  const {housesList, setHouseList} = useHousesStore();

  const [loading, setLoading] = useState(true);
  // const [housesList, setHouseList] = useState([]);

  const callGetHouses = async () => {
    console.log('callGetHouses?');
    console.log({jsonHouses});
    // const result = await getHousesCall();
    setHouseList(jsonHouses.properties ? jsonHouses.properties : []);
    setLoading(false);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesList} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>

            <IconButton iconName="filter" />
          </TopContainer>

          <Input label="Localização" placeholder="Digite o endereço" />
          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
