import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const mainStack = createStackNavigator(
  { 
  HomeScreen: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f39c12',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#ffffff'
      },
    },
  }
);

const tabStack = createBottomTabNavigator({
  Home: {screen: mainStack}
})

export default createDrawerNavigator({
  mainStack: tabStack
})