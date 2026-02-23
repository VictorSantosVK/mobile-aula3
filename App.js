import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen';
import ListaContatosScreen from './screens/ListaContatosScreen';
import CadastroContatoScreen from './screens/CadastroContatoScreen';
import EditarContatoScreen from './screens/EditarContatoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} options={{headerLeft: () => null}} />
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
        <Stack.Screen name="EditarContato" component={EditarContatoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}