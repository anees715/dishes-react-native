import { USERS } from './loginUser';
import { AsyncStorage } from "react-native";

const loginUser =  async (userName, password) => {
  let currentUser = await USERS.find( user => {
    return (user.userName == userName && user.password == password)
  })

  if (!!currentUser){
    try {
        await authenticateUser(currentUser);
        return true;
      } catch (error) {
        
      }
    }
  return false;
}

const authenticateUser = async (user) => {
  try {
    await AsyncStorage.setItem('authentication', {success: true, user: user});
  } catch (error) {
    
  }
}
export default loginUser;