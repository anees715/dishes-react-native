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

const navigationOption = {
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

const homeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: drawerIcon(navigation, 'menu')
    })
  },
  AddDishScreen: AddDishScreen
}, navigationOption);

const dishStack = createStackNavigator({
  DishScreen: {
    screen: DishesScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: drawerIcon(navigation, 'menu')
    })
  }
}, navigationOption);

const tabStack = createBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons
                    name="home"
                    size={30}
                    color={tintColor}
                  />
    }
  },
  Dishes: {
    screen: dishStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons
                    name="food-variant"
                    size={30}
                    color={tintColor}
                  />
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#f39c12',
    inactiveTintColor: '#ababab',
    style: {
      backgroundColor: '#f9f9f9',
    },
  },
})

export default createDrawerNavigator({
  Home: tabStack
})