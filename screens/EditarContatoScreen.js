import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { contatos } from '../data/contatos';

export default function EditarContatoScreen({ route, navigation }) {
  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

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
    <View style={{ flex:1, padding:20 }}>
      <Text>Editar Contato</Text>

      <TextInput value={nome} onChangeText={setNome} style={{borderWidth:1, marginBottom:10}} />
      <TextInput value={email} onChangeText={setEmail} style={{borderWidth:1, marginBottom:10}} />
      <TextInput value={telefone} onChangeText={setTelefone} style={{borderWidth:1, marginBottom:10}} />

      <Button title="Alterar" onPress={alterarContato} />
      <Button title="Excluir" onPress={excluirContato} color="red" />
    </View>
  );
}