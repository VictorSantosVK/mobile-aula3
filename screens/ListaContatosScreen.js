import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { contatos } from '../data/contatos';

export default function ListaContatosScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CadastroContato')}
      >
        <Text style={styles.addText}>+ Novo Contato</Text>
      </TouchableOpacity>

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
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.telefone}>{item.telefone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 15,
  },
  addButton: {
    backgroundColor: '#2F80ED',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  telefone: {
    color: 'gray',
  },
});