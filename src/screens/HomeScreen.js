import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddNewIcon from '../components/AddNewIcon';
import { container } from '../styles/common';
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <AddNewIcon onPressItem={() => this.props.navigation.navigate('AddDishScreen')} />
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