import { USERS } from '../../static/users';
import { AsyncStorage } from "react-native";

export const loginUser =  async(userName, password) => {
  let currentUser = await USERS.find( user => {
    return (user.userName == userName.toLowerCase() && user.password == password)
  })
  if (!!currentUser){
    try {
        await authenticateUser(currentUser);
        return {success: true, user: currentUser};
      } catch (error) {
        
      }
    }
  return {success: false};
}

export const authStatus = async() => {
  try {
    const authStatus = await AsyncStorage.getItem('authentication');
    return !!authstatus
   } catch (error) {
     
   }
}

const authenticateUser = async (user) => {
  try {
    await AsyncStorage.setItem('authentication', {success: true, user: user});
  } catch (error) {
    
  }
}