import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { height } from '../styles/common';

export default class PreLoader extends Component{
	render (){
		return (
      <View style={[styles.preloader]}>
        <ActivityIndicator style={{height: 80}} size="large" color="#f39c12" />
      </View>
			)
	}
}

const styles = StyleSheet.create({
	preloader:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: height,
		backgroundColor: '#ffffff',
	}
})
