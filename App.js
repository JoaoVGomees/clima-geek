import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/Routes/BottomTabNav/routes'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { ThemeProvider, useTheme } from './src/Context/index'

function AppContent() {
  const { isDarkTheme } = useTheme();
  
  const theme = {
    colors: {
      background: isDarkTheme ? '#000' : '#fff',
      text: isDarkTheme ? '#fff' : '#000',
      tabBarBackground: isDarkTheme ? '#000' : '#fff',
      tabBarActiveTintColor: isDarkTheme ? '#fff' : '#22222B',
      tabBarInactiveTintColor: isDarkTheme ? '#888' : '#74747C',
    },
  };

  return (
    <StyledThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StyledThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
