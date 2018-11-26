import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AddNewIcon from '../components/AddNewIcon';
import { container } from '../styles/common';
import { userDishes } from '../services/DishesService';
import CardList from '../components/CardList';
import DishEmptyImage from '../../assets/images/dish-empty.png';
import { NavigationEvents } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props){
    super(props)
    this.state = {
      dishes: []
    }
  }

  async fetchDishes(){
    let dishes = await userDishes()
    !!dishes && this.setState({dishes: dishes})
  }
  

  render() {
    const { dishes } = this.state;
     return (
      <View style={styles.container}>
        {dishes.length < 3 && 
          <AddNewIcon onPressItem={() => this.props.navigation.navigate('AddDishScreen')} />
        }
        <View style={{flex: 1, flexDirection: 'row'}}>
        {!dishes.length ? 
          <View style={styles.noContent}>
            <Text style={styles.noContentText}>You haven't added any dishes yet!</Text>
            <Image source={DishEmptyImage} style={styles.emptyImage}/>
          </View>
          : 
            <View style={{margin: 25, flex: 1}}>
            <Text style={styles.dishStatus}>You have added {dishes.length} dishe(s) of 3</Text>
            <CardList items={dishes} />
            </View>
        }
        </View>
        <NavigationEvents onDidFocus={this.fetchDishes.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  noContent:{
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContentText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: '#ababab'
  },
  emptyImage: {
    marginTop: 40
  },
  dishStatus: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
    color: '#ababab'
  }
})