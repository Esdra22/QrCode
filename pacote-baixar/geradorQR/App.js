/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,FlatList
} from 'react-native';
//import dos arquivos
import api from './sr/api';

class APP extends Component{
  constructor(props){
    super(props);
    //Estado é o lugar onde vamos armazenar os dados para exibir na tela
    this.state ={
      imagens = []
    }
  }
//declara o meu componenteDidMount
componentDidMount(){
  const response = await api.get('http:localhost:3030/generate');
  this.setState({
    imagens: response.date
  })
}
render(){
  return(
    <View style= {styles.container}>
      <FlatList/>
    </View>
  )
}

} //fecha a class
//ciclo de vida q é executado ao iniciar o aplicativo




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
