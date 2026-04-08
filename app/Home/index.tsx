import { Area, BackgroundApp, List, ListBalance, Title } from '@/assets/styles';
import BalanceItem from '@/components/BalanceItem';
import Header from '@/components/Header';
import HistoryList from '@/components/HistoryList';
import api from '@/services/app';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function Home() {

  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormatted = format(dateMovements, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormatted
        }
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormatted,
        }
      });

      if(isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    }

  }, [setListBalance, dateMovements, isFocused]);

  async function handleDelete(id: string) {
    try {
      api.delete('/receives/delete', {
        'params': {
          'item_id': id
        }
      })

      setDateMovements(new Date());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BackgroundApp>
      <Header title="Minhas movimentações" />
      <ListBalance data={listBalance} horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={item => item.tag } renderItem={({item}) => <BalanceItem data={item} />} />

      <Area>
        <TouchableOpacity>
          <Icon name="event" colo="#121212" size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List data={ movements } keyExtractor={item => item.id} renderItem={ ({item}) => <HistoryList data={item} deleteItem={handleDelete} />} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}} />
    </BackgroundApp>
  );
}
