import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { contatos } from '../data/contatos';

export default function CadastroContatoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

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
    <View style={{ flex:1, padding:20 }}>
      <Text>Cadastro de Contato</Text>

      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={{borderWidth:1, marginBottom:10}} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{borderWidth:1, marginBottom:10}} />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={{borderWidth:1, marginBottom:10}} />

      <Button title="Salvar" onPress={salvarContato} />
    </View>
  );
}