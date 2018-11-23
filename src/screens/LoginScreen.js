import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput 
  } from 'react-native';
import Button from '../elements/Button'

export default class LoginScreen extends Component{
  state = {
    userName: "",
    password: ""
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
          placeholder='User Name'
          underlineColorAndroid='transparent' />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          underlineColorAndroid='transparent' />
        </View>
        <Button text="Sign In" />
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
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 30,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  }
})