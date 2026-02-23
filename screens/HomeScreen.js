import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ route }) {
  const { username, idade } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem-vindo, {username}!</Text>
      <Text>Idade: {idade}</Text>
    </View>
  );
}