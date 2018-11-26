import React, { Component } from 'react'
import { getAllDishes } from '../services/DishesService';
import CardList from '../components/CardList';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import ModalComponent from '../elements/ModalComponent';
import { AddUserVote } from '../services/UserVotesService';

export default class DishesScreen extends Component {
  static navigationOptions = {
    title: 'Dishes',
  };
  constructor(props){
    super(props)
    this.state = {
      dishes: [],
      points: {1: 30, 2: 20, 3: 10 },
      showPointsModal: false,
      selectedItem: ""
    }
    this.handleDishVoteClick = this.handleDishVoteClick.bind(this);
  }
  

  async componentDidMount() {
    this.fetchDishes()
  }

  async fetchDishes(){
    let dishes = await getAllDishes()
    !!dishes && this.setState({dishes: dishes})
  }

  handleDishVoteClick(id){
    this.setState({selectedItem: id, showPointsModal: true})
  }

  async setUserVote(point){
    this.setState({showPointsModal: false})
    let addVote = await AddUserVote(this.state.selectedItem, point);
    if (addVote.success){
      this.fetchDishes()
    }
  }

  renderDishPoints(){
    const { points } = this.state;
    const _this = this;
    return (
      <View style={styles.modal}>
        { 
          Object.values(points).map((item, index) => {
            return (
              <TouchableOpacity
                activeOpactiy={0.8}
                key={index}
                style={styles.pointItem}
                onPress={ () => _this.setUserVote(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }

  render() {
    const { dishes } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CardList items={dishes} 
            showButton 
            buttonTitle="Vote" 
            onPressButton={ this.handleDishVoteClick } />
        </View>
        <ModalComponent modalVisible={this.state.showPointsModal} 
            onRequestClose={() => this.setState({ showPointsModal: false})} 
            modalBody={this.renderDishPoints()}
            containerStyle={{
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center'
  },
  pointItem: {
    padding: 12,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#efefef',
    backgroundColor: '#efefef',
  }
})