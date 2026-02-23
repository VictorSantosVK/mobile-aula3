import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useLayoutEffect } from 'react';

export default function CadastroUsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'CADASTRO DE USUÁRIOS',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        placeholder="Digite o CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Digite o email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
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