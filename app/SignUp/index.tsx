import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
} from '@/assets/styles';
import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (name === '' || email === '' || password === '') return;

    signUp(email, password, name);
  }

  return (
    <Background>
      <Container behavior='padding' enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            value={name}
            onChangeText={text => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton
          activeOpacity={0.8}
          onPress={handleSignUp}
          disabled={loadingAuth}
        >
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
