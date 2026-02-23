import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { contatos } from '../data/contatos';
import { Ionicons } from '@expo/vector-icons';

export default function ListaContatosScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Lista de Contatos',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#3F6FD8',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <Ionicons
          name="add"
          size={26}
          color="#FFF"
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate('CadastroContato')}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('EditarContato', { contato: item })
            }
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={30} color="#FFF" />
            </View>

            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.telefone}>{item.telefone}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4F81D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  telefone: {
    color: '#555',
    marginTop: 3,
  },
  separator: {
    height: 1,
    backgroundColor: '#DADADA',
    marginLeft: 80,
  },
});