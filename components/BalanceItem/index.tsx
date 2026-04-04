import { Balance, ContainerBalanceItem, LabelBalanceItem } from '@/assets/styles';
import React, { useMemo } from 'react';

export default function BalanceItem({ data }: { data: { tag: string, saldo: number } }) {

  const labelName = useMemo(() => {
    switch (data.tag) {
      case 'saldo':
        return {
          label: 'Saldo atual',
          color: '3b3dbf',
        };
      case 'receita':
        return {
          label: 'Entradas de hoje',
          color: '00b94a',
        };
      default:
        return {
          label: 'Saídas de hoje',
          color: 'ef463a',
        };
    }

  }, [data.tag]);


  return (
    <ContainerBalanceItem bg={labelName.color}>
      <LabelBalanceItem>{labelName.label}</LabelBalanceItem>
      <Balance>R$ {data.saldo.toFixed(2).replace('.', ',')}</Balance>
    </ContainerBalanceItem>
  );
}
