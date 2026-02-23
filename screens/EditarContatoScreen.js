import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useLayoutEffect } from 'react';
import { contatos } from '../data/contatos';

export default function EditarContatoScreen({ route, navigation }) {
  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'ALTERAÇÃO / EXCLUSÃO DE CONTATOS',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  function alterarContato() {
    const index = contatos.findIndex(c => c.id === contato.id);
    contatos[index] = { ...contato, nome, email, telefone };
    navigation.goBack();
  }

  function excluirContato() {
    const index = contatos.findIndex(c => c.id === contato.id);
    contatos.splice(index, 1);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={alterarContato}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={excluirContato}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3B6EDC',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#EB5757',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});