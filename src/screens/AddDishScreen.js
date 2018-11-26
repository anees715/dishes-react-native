import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CameraComponent from '../components/CameraComponent';
import AddNewIcon from '../components/AddNewIcon';
import Button from '../elements/Button';
import { AddDish } from '../services/DishesService';
import { uploadToStorage } from '../services/FirebaseService';

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
    this.handleAddNewDish = this.handleAddNewDish.bind(this);
    this.uploadToFirebase = this.uploadToFirebase.bind(this);
  }

  async handleAddNewDish(){
    await AddDish(this.state.dish)
    alert("done")
  }

  toggleCamera(){
    let currentCameraStatus = this.state.isSelectedCamera;
    this.setState({isSelectedCamera: !currentCameraStatus});
  }

  async uploadToFirebase(imagePath){
    // let response = await uploadToStorage(imagePath);
    // console.log(response) 
    this.setState({dish: {...this.state.dish, image: "https://placeimg.com/640/480/any"}}, () => {
      this.setState({isSelectedCamera: false})
    })
  }
  

  render() {
    const { isSelectedCamera } = this.state
    return (
      <View style={{flex: 1}}>
        {isSelectedCamera ? (
          <CameraComponent onImageSelected={ this.uploadToFirebase }/>
        ) : (
          <View style={{margin: 20}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <AddNewIcon onPressItem={ this.toggleCamera.bind(this) } 
                          image={this.state.dish.image} 
                          inRemoveContent={() => this.setState({dish: {...this.state.dish, image: ""}})}/>
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
