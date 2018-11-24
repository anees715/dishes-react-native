import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddNewIcon from '../components/AddNewIcon';
import { container } from '../styles/common';
import { getAllDishes } from '../services/DishesService';
import CardList from '../components/CardList';

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

  async componentDidMount() {
    let dishes = await getAllDishes()
    !!dishes && this.setState({dishes: dishes})
  }
  

  render() {
    const { dishes } = this.state;
     return (
      <View style={styles.container}>
        <AddNewIcon onPressItem={() => this.props.navigation.navigate('AddDishScreen')} />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CardList items={dishes} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  }
})