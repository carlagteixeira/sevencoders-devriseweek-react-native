import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

export const BottomScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: ${({theme}) => theme.metrics.hp(65)}px;
  padding: ${({theme}) => theme.metrics.px(24)}px;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  border-top-right-radius: ${({theme}) => theme.metrics.px(24)}px;
  border-top-left-radius: ${({theme}) => theme.metrics.px(24)}px;
  position: absolute;
  bottom: 0;
`;

export const ImageBackground = styled.ImageBackground`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40%;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${({theme}) => theme.metrics.px(48)}px;
  padding: ${({theme}) => theme.metrics.px(24)}px;
`;

export const FeaturesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;
