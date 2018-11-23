import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput 
  } from 'react-native';

export default class LoginScreen extends Component{
  state = {
    userName: "",
    password: ""
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <View>
          <TextInput style={styles.input}
          placeholder='User Name'
          underlineColorAndroid='transparent' />
        </View>
        <View>
          <TextInput style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          underlineColorAndroid='transparent' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})