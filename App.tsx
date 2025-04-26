import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/presentation/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/presentation/store/store';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
