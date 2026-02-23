import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useLayoutEffect } from 'react';
import { contatos } from '../data/contatos';

export default function CadastroContatoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'CADASTRO DE CONTATO',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  function salvarContato() {
    contatos.push({
      id: contatos.length + 1,
      nome,
      email,
      telefone
    });

    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Digite o email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        placeholder="Digite o telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={salvarContato}>
        <Text style={styles.buttonText}>Salvar</Text>
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
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});