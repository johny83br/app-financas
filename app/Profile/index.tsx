import { ContainerProfile, LogoutButton, LogoutText, Message, Name, NewLink, NewText } from '@/assets/styles';
import Header from '@/components/Header';
import { AuthContext } from '@/contexts/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

export default function Profile() {

  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  return(
    <ContainerProfile>
      <Header title="Meu Perfil" />
      <Message>Hey, bem vindo de volta!</Message>
      <Name numberOfLines={1}>
        {user && user.name}
      </Name>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={() => signOut() }>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </ContainerProfile>
  );
}