import React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Maria', nota: 5.7 },
    { id: 3, nome: 'José', nota: 8.5 },
    { id: 4, nome: 'Gustavo', nota: 4.2 },
    { id: 5, nome: 'Raquel', nota: 9.5 },
    { id: 6, nome: 'Tobias', nota: 8.2 },
    { id: 7, nome: 'Ronaldo', nota: 6.0 },
    { id: 8, nome: 'Alex', nota: 4.2 },
    { id: 9, nome: 'Lucas', nota: 7.2 },
    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Maria', nota: 5.7 },
    { id: 13, nome: 'José', nota: 8.5 },
    { id: 14, nome: 'Gustavo', nota: 4.2 },
    { id: 15, nome: 'Raquel', nota: 9.5 },
    { id: 16, nome: 'Tobias', nota: 8.2 },
    { id: 17, nome: 'Ronaldo', nota: 6.0 },
    { id: 18, nome: 'Alex', nota: 4.2 },
    { id: 19, nome: 'Lucas', nota: 7.2 },
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    // justifyContent: 'space-around'
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // alignItems: 'flex-start',
}

export const Aluno = (props) => {
    return (
        <View style={itemEstilo}>
            <Text>Nome: {props.nome}</Text>
            <Text>Nota: {props.nota}</Text>
        </View>
    )
}

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    );
}