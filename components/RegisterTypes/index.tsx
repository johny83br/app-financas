import { RegisterContainer, RegisterLabel, RegisterTypeButton } from '@/assets/styles';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';

export default function RegisterTypes({type, sendTypeChanged}: {type: string, sendTypeChanged: any}) {

  const [typeChecked, setTypeChecked] = useState(type);

  function changeType(name: string) {
    setTypeChecked(name);
    sendTypeChanged(name);
  }

  return (
    <RegisterContainer>
      <RegisterTypeButton checked={ typeChecked === 'receita' ? true : false } onPress={() => changeType('receita')}>
        <Feather name="arrow-up" size={25} color="#121212" />
        <RegisterLabel>
          Receita
        </RegisterLabel>
      </RegisterTypeButton>
      <RegisterTypeButton checked={ typeChecked === 'despesa' ? true : false } onPress={() => changeType('despesa')}>
        <Feather name="arrow-down" size={25} color="#121212" />
        <RegisterLabel>
          Despesa
        </RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  );
}