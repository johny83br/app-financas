import AuthProvider from '@/contexts/auth';
import Routes from '@/routes';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}