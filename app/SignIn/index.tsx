import {
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from '@/assets/styles';
import { AuthContext } from '@/contexts/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (email === '' || password === '') return;

    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
        <Logo source={require('../../assets/images/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton
          activeOpacity={0.8}
          onPress={handleLogin}
          disabled={loadingAuth}
        >
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Entrar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta gratuita</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
