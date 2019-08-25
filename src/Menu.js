import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, { MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListFlex';
import Flex from './componentes/Flex';

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: "Lista (Flex Box)" }
    },
    ComunicacaoIndireta: {
        screen: TextoSincronizado,
        navigationOptions: { title: "Comunicação Indireta" }
    },
    ComunicacaoDireta: {
        screen: () => <Avo nome="João" sobrenome="Silva"></Avo>,
        navigationOptions: { title: "Comunicação Direta" }
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Teste: " ano={19} />,
        navigationOptions: { title: "Validar Props" }
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={1000} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: "Mega Sena" }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: "Par & Ímpar" }
    },
    Simples: {
        screen: () => <Simples texto="Flexível!!!" />
    }
}, { drawerWidth: 200 });