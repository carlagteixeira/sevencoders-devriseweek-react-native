import {ThemeContext} from 'styled-components';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundDark};
  border-color: ${({theme}) => theme.colors.primary};
  border-width: ${({theme}) => theme.metrics.px(2)}px;
  border-radius: ${({theme}) => theme.metrics.px(12)}px;
  width: 100%;
  height: ${({theme}) => theme.metrics.px(56)}px;
`;
