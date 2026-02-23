import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { contatos } from '../data/contatos';

export default function ListaContatosScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Lista de Contatos',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#3B6EDC',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerRight: () => (
        <Ionicons
          name="add"
          size={28}
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
            style={styles.item}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('EditarContato', { contato: item })
            }
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={28} color="#FFF" />
            </View>

            <View style={styles.textContainer}>
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

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#4A79D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },

  telefone: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },

  separator: {
    height: 2,
    backgroundColor: '#CFCFCF',
    marginLeft: 90,
  },
});