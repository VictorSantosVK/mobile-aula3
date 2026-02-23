import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={{ flex:1, padding:20, justifyContent:'center' }}>
      <Text>Login</Text>

      <TextInput
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        style={{ borderWidth:1, marginBottom:10, padding:8 }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth:1, marginBottom:10, padding:8 }}
      />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('ListaContatos')}
      />

      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('CadastroUsuario')}
      />
    </View>
  );
}