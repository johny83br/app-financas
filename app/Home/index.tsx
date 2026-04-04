import { BackgroundApp, ListBalance } from '@/assets/styles';
import BalanceItem from '@/components/BalanceItem';
import Header from '@/components/Header';
import api from '@/services/app';
import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

export default function Home() {

  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormatted = format(dateMovements, 'dd/MM/yyyy');

      const balance = await api.get('/balance', {
        params: {
          date: dateFormatted,
        }
      });

      if(isActive) {
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    }

  }, [setListBalance, dateMovements, isFocused]);

  return (
    <BackgroundApp>
      <Header title="Minhas movimentações" />
      <ListBalance data={listBalance} horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={item => item.tag } renderItem={({item}) => <BalanceItem data={item} />} />
    </BackgroundApp>
  );
}
