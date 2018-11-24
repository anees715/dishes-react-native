import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CameraComponent from '../components/CameraComponent';
import AddNewIcon from '../components/AddNewIcon';
import Button from '../elements/Button';
import { AddDish } from '../services/DishesService';

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
    this.handleAddNewDish = this.handleAddNewDish.bind(this)
  }

  async handleAddNewDish(){
    await AddDish(this.state.dish)
    alert("done")
  }
  

  render() {
    const { isSelectedCamera } = this.state
    return (
      <View style={{flex: 1, margin: 20}}>
        {isSelectedCamera ? (
          <CameraComponent />
        ) : (
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <AddNewIcon />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Dish Name"
                onChangeText={(name) => this.setState({dish: {...this.state.dish, name: name}})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Dish Description"
                onChangeText={(description) => this.setState({dish: {...this.state.dish, description: description}})}
                multiline={true}
                numberOfLines={8}
              />
            </View>
            <Button text="Submit" 
                    onPressButton={() => this.handleAddNewDish() }
                    elementStyles={{marginTop: 30}}/>
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
    borderBottomWidth: 1
  },
  input:{
    height:50
  }
})
