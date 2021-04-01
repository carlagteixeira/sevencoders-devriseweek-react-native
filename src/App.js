import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {Navigator} from './routes';

import StoryBook from '../storybook';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
