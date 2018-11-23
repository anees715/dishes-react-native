import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import StartScreen from '../screens/StartScreen';
import GuestStack from './GuestStack';
import UserStack from './UserStack';

export default createAppContainer(createSwitchNavigator(
  {
    StartScreen: StartScreen,
    GuestStack: GuestStack,
    UserStack: UserStack,
  },
  {
    initialRouteName: 'StartScreen',
  }
));