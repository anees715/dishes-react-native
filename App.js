import React, { Component } from 'react';
import AppNavigator from './src/navigations';
import { Font, AppLoading } from 'expo';

export default class App extends Component {
  constructor () {
		super();
		this.state = {
			isReady: false,
		}
  }
  
  async loadAssetsAsync(){
    await Font.loadAsync({
      'Roboto-Medium': require('./assets/fonts/roboto/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    } else {
      return <AppNavigator />
    }
  }
}
