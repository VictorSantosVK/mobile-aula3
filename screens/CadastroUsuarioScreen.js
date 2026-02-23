import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function CadastroUsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text>Cadastro de Usuário</Text>

      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={{borderWidth:1, marginBottom:10}} />
      <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} style={{borderWidth:1, marginBottom:10}} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{borderWidth:1, marginBottom:10}} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={{borderWidth:1, marginBottom:10}} />

      <Button title="Salvar" onPress={() => navigation.goBack()} />
    </View>
  );
}