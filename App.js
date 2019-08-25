import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';
import Inverter, { MegaSena } from './src/componentes/Multi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Texto Simples" />
        <ParImpar numero={40} />
        <Inverter texto="React Native!" />
        <MegaSena numeros={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});