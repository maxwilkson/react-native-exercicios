import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    norte: {
        backgroundColor: '#bdf9ed',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centro: {
        backgroundColor: '#f2f9bd',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    sul: {
        backgroundColor: '#bdf9c4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circulo: {
        width: 70,
        height: 70,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
});

const Circulo = props => (<View style={styles.circulo}></View>);

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    );
}