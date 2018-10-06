import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Sustek'
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        //const response = await api.get('/products')

        //const {docs} = response.data;
    }

    render() {
        return (
            <View>
                <Text> Pagina Legal </Text>
            </View>
        );
    }
}