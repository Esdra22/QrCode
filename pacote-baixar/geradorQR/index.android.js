import React, { Component} from 'react';
import{
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import QRCode from 'react-native-qrcode';
class  HelloWorld  extends  Component  { 
    state  =  { 
      text : 'http://facebook.github.io/react-native/' , 
    } ;
  
    render ( )  { 
      return  ( 
        < View  style = { styles . container } > 
          < TextInput 
            style = { styles . input } 
            onChangeText = { ( text )  =>  this . setState ( { text : text } ) } 
            value = { this . state . text } 
          / >
          <QRCode
            value={this.state.text}
            size={200}
            bgColor='purple'
            fgColor='white'/>
        </View>
      );
    };
  }
  
     const styles =  StyleSheet . create ( { 
      container : { 
          flex : 1 , 
          backgroundColor : 'white' , 
          alignItems : 'center' , 
          justifyContent : 'center' 
      } ,
  
      input : { 
          height : 40 , 
          borderColor : 'grey' , 
          borderWidth : 1 , 
          margin : 10 , 
          borderRadius : 5 , 
          padding : 5 , 
      } 
  } ) ;
  
  AppRegistry . registerComponent ( 'HelloWorld' ,  ( )  =>  HelloWorld ) ;
  
  módulo . exportações  =  HelloWorld ;