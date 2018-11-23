import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput 
  } from 'react-native';
import Button from '../elements/Button'
import { loginUser } from '../services/AuthService';

export default class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }
  async handleUserLogin(){
    const { userName, password} = this.state
    let loginStatus = await loginUser(userName, password)
    if(loginStatus.success){
      this.props.navigation.navigate('HomeScreen')
    }
    else{
      alert("Fail")
    }
  }

  render(){
    return(
      <View style={styles.container}>
          <Text>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder='User Name'
            underlineColorAndroid='transparent' 
            onChangeText={(userName) => {this.setState({userName})}} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            underlineColorAndroid='transparent' 
            onChangeText={(password) => {this.setState({password})}} />
          </View>
          <Button text="Sign In" onPressButton={() => this.handleUserLogin() }/>
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
    borderRadius: 50,
    borderColor: '#d1d5da',
    minWidth: 300,
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  input:{
    height:50,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1
  }
})