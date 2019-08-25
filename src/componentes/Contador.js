import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    // constructor(props) {
    //     super(props);
    //     this.state = { /* ... */ };
    //     this.incrementar = this.incrementar.bind(this);
    // }

    incrementar() {
        this.setState({ numero: ++this.state.numero });
    }

    resetar = () => {
        this.setState({ numero: this.props.numeroInicial });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
                <TouchableHighlight onPress={() => this.incrementar()} onLongPress={this.resetar}>
                    <Text>Incrementar/Resetar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}