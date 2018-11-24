import { AsyncStorage } from "react-native";
import { currentUser } from "./AuthService";

export const AddDish = async (dish) => {
  try {
    let dishes = await AsyncStorage.getItem('dishes');
    let newDishes = JSON.parse(dishes);
    if( !newDishes ){
      newDishes = []
    }
    let user = await getCurrentUser();
    dish['userId'] =  user.id;
    newDishes.push(dish)
    await AsyncStorage.setItem('dishes',JSON.stringify(newDishes));
    } catch(error) {

    }
  }

export const getAllDishes = async () => {
  try{
    let value = await AsyncStorage.getItem('dishes');
    return JSON.parse(value);
  } catch(error){

  }
} 

const getCurrentUser = async () => {
  return await currentUser()
}