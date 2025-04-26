import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao app de carona!</Text>
      <Button mode="outlined" onPress={() => dispatch(logout())}>
        Sair
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 16 },
});
