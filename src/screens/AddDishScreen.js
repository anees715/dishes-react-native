import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CameraComponent from '../components/CameraComponent';

export default class AddDishScreen extends Component {
  static navigationOptions = {
    title: 'Add New Dish',
  };
  constructor(props){
    super(props)
    this.state = {
      dish: {
        name: "",
        description: "",
        image: ""
      },
      isSelectedCamera: false 
    }
  }
  

  render() {
    const { isSelectedCamera } = this.state
    return (
      <View style={{flex: 1}}>
        {isSelectedCamera ? (
          <CameraComponent />
        ) : (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Dish Name"
                onChangeText={(name) => this.setState({dish: {...this.state.dish, name: name}})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Dish Description"
                onChangeText={(description) => this.setState({dish: {...this.state.dish, description: description}})}
              />
            </View>
          </View>
        )
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#efefef',
    borderWidth: 1
  },
  input:{
    height:50
  }
})
