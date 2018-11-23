import React from 'react';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';

const drawerIcon = (navigation, icon) => (
  <Entypo
    name={icon}
    style={{marginLeft: 15}}
    size={30} 
    color="#ffffff"
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  />
)
const mainStack = createStackNavigator(
  { 
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: drawerIcon(navigation, 'menu')
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f39c12',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#ffffff'
      }
    },
  }
);

const tabStack = createBottomTabNavigator({
  Home: {screen: mainStack}
})

export default createDrawerNavigator({
  Home: tabStack
})