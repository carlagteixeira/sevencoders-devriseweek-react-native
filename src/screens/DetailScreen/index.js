import React, {useEffect, useState} from 'react';
import {useHousesStore} from '../../services/stores';
import {
  IconButton,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  Loader,
  HouseFeatureCard,
} from '../../components';
import {getHouseDetail} from '../../services/calls';
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './styles';

export const DetailScreen = ({navigation}) => {
  const {selectedHouse} = useHousesStore();
 // const [loading, setLoading] = useState(true);

  //const [houseDetails, setHouseDetails] = useState([]);

  const callGetHouseDetail = async () => {
    console.log('callGetHouseDetail?');
    // const result = await getHouseDetail({
    //   property_id: selectedHouse.property_id,
    // });

    //setHouseDetails(
    // /* result.properties ? result.properties : */ selectedHouse.properties,
    //);

   // setLoading(false);
  };

  useEffect(() => {
    callGetHouseDetail();
  }, []);

  const onClickArrowBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <ImageBackground source={{uri: selectedHouse.photos[0].href}}>
        <IconButton
          onPress={onClickArrowBack}
          iconName="chevron-back"
          transparent
        />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>

      {loading ? (
        <BottomScreenContainer>
          <Loader />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{selectedHouse.address.line}</DetailTitle>
          <DetailSubTitle>{`${selectedHouse.address.neighborhood_name} - ${selectedHouse.address.state}`}</DetailSubTitle>

          <DetailSectionTitle>Detalhes</DetailSectionTitle>

          <FeaturesContainer>
            <HouseFeatureCard
              iconName="bed-king-outline"
              featureText="2 beds"
            />
            <HouseFeatureCard
              iconName="bed-king-outline"
              featureText="2 beds"
            />
            <HouseFeatureCard
              iconName="bed-king-outline"
              featureText="2 beds"
            />
          </FeaturesContainer>

          <DetailSectionTitle>Vantagens do Imóvel</DetailSectionTitle>
          <DetailText key="ar-condicionado">- Ar condicionado</DetailText>
          <DetailText key="estacionamento">- Estacionamento</DetailText>

          {/*selectedHouse.features[1].text.map(item => (
              <DetailText key={item}>- {item}</DetailText>
          ))*/}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
