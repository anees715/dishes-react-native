import React from 'react';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';
import AddDishScreen from '../screens/AddDishScreen';
import DishesScreen from '../screens/DishesScreen';


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
    },
    AddDishScreen: AddDishScreen
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
  Home: {
    screen: mainStack,
    navigationOptions: {
      tabBarIcon: <MaterialCommunityIcons
                    name="home"
                    size={30}
                  />
    }
  },
  Dishes: {
    screen: DishesScreen,
    navigationOptions: {
      tabBarIcon: <MaterialCommunityIcons
                    name="food-variant"
                    size={30}
                  />
    }
  }
})

export default createDrawerNavigator({
  Home: tabStack
})