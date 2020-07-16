import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';
import LugarItem from '../componentes/ContatoItem'

import { useSelector } from 'react-redux';






const ListaDeContatosTela = (props) => {
    const contatos = useSelector(estado => estado.contatos);
    console.log('contatos: ', contatos);
    return (
        <FlatList
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={contato =>
                <ContatoItem
                    nomeContato={contato.item.nomeContato}
                    onSelect={
                        () => props.navigation.navigate('DetalhesDoContato',
                            { nomeContato: contato.item.nomeContato, idContato: contato.id })
                    }
                    telefone={'um telefone'}
                />

            } />
    );
}

ListaDeContatosTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Lista de Contatos',
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoContato') }} />
            </HeaderButtons>
    }
}






const estilos = StyleSheet.create({

});

export default ListaDeContatosTela;

//Mapatela
//NovoContatoTela
//DetalhesDoLugarTela
//ListaDeLugarestela