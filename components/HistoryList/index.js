import { ContainerHistory, IconView, Tipo, TipoText, ValorText } from '@/assets/styles';
import Icon from '@expo/vector-icons/Feather';
import React, { useMemo } from 'react';
import { FormattedNumber, IntlProvider } from 'react-intl';

export default function HistoryList( { data } ) {

  const labelName = useMemo(() => {
    switch (data.type) {
      case 'despesa':
        return {
          label: 'Despesa',
          color: 'ef463a',
          icon: 'arrow-down',
        };
      default:
        return {
          label: 'Receita',
          color: '00b94a',
          icon: 'arrow-up',
        };
    }

  }, [data.type]);

  return(
    <ContainerHistory>
      <Tipo>
        <IconView bg={labelName.color}>
          <Icon name={labelName.icon} size={20} color="#FFFFFF" />
          <TipoText>{data.type.replace(/^./, data.type[0].toUpperCase())}</TipoText>
        </IconView>
      </Tipo>

      <IntlProvider locale="pt-br" defaultLocale="pt-br">
        <ValorText>
          <FormattedNumber value={Math.round(data.value * 100) / 100} style="currency" currency="BRL" />
        </ValorText>
      </IntlProvider>
    </ContainerHistory>
  );
}