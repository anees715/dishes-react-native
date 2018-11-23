import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator({ 
  LoginScreen: {
    screen: LoginScreen ,
    navigationOptions: () => ({
      header: null
    }),
  }
});