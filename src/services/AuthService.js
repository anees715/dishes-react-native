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

const authenticateUser = async (user) => {
  try {
    const userData = {success: true, user: user}
    await AsyncStorage.setItem('authentication', JSON.stringify(userData));
  } catch (error) {
    alert(error)
  }
}

export const authStatus = async() => {
  try {
    const authStatus = await AsyncStorage.getItem('authentication');
    return !!authstatus
   } catch (error) {
     
   }
}


export const currentUser = async () => {
  try {
    let authentication = await AsyncStorage.getItem('authentication');
    authentication = JSON.parse(authentication);
    return authentication.user
  } catch (error) {
    alert("Auth"+error)
  }
}