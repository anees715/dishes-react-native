import React, { Component } from 'react'
import { getAllDishes } from '../services/DishesService';
import CardList from '../components/CardList';
import { View, Picker, StyleSheet } from 'react-native';
import PointsModal from '../components/PointsModal';

export default class DishesScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      dishes: [],
      points: [1, 2, 3],
      showPointsModal: false
    }
    this.handleDishVoteClick = this.handleDishVoteClick.bind(this);
  }
  

  async componentDidMount() {
    let dishes = await getAllDishes()
    !!dishes && this.setState({dishes: dishes})
  }

  handleDishVoteClick(){
    this.setState({showPointsModal: true})
  }

  render() {
    const { dishes } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CardList items={dishes} 
            showButton 
            buttonTitle="Vote" 
            onPressButton={() => handleDishVoteClick() } />
        </View>
        <PointsModal modalVisible={this.state.showPointsModal} 
                     closeModal={() => this.setState({ showPointsModal: false})} />
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