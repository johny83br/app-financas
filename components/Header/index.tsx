import { ButtonMenu, ContainerHeader, TitleHeader } from '@/assets/styles';
import Icon from '@expo/vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';

export default function Header({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <ContainerHeader>
      <ButtonMenu
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Icon name="menu" size={24} color="#121212" />
      </ButtonMenu>

      {title && <TitleHeader>{title}</TitleHeader>}
    </ContainerHeader>
  );
}
