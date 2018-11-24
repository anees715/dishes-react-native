import { AsyncStorage } from "react-native";
import { currentUser } from "./AuthService";

export const AddDish = async (dish) => {
  try {
    let dishes = await findOrCreateStorage('dish')
    let user = await getCurrentUser();
    dish['id'] =  user.id;
    await AsyncStorage.setItem('dishes', dishes.contact());
    } catch(error) {

    }
  }

const findOrCreateStorage = async (key) => {
  try{
    let record =  await AsyncStorage.getItem(key);
    if (record != null) return record;
    let storage = []
    await AsyncStorage.setItem(key, storage);
    return storage;
  } catch(error){
    
  }
}

const getCurrentUser = async () => {
  return await currentUser()
}