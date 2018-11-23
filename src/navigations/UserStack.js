import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const mainStack = createStackNavigator({ 
  HomeScreen: HomeScreen 
});

const tabStack = createBottomTabNavigator({
  Home: {screen: mainStack}
})

export default createDrawerNavigator({
  mainStack: tabStack
})