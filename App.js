import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Importing Navigation-Container
import { NavigationContainer } from '@react-navigation/native';

// Importing usable Components
import RootStackScreen from './components/screens/Navigations/RootStackScreen';

export default function App() {
  return (

    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>

  );
}
