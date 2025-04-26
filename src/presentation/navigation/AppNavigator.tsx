import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import { useAppSelector } from '../store/hooks';
import RegisterScreen from '../screens/Register';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    {!user ? (
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        </>
    ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
    )}
    </Stack.Navigator>
  );
}
