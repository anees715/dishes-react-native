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
    dish['id'] = await setRecordId(newDishes);
    dish['userId'] =  user.id;
    dish['points'] = 0;
    newDishes.push(dish)
    await AsyncStorage.setItem('dishes', JSON.stringify(newDishes));
    } catch(error) {
      alert(error)
    }
  }

export const getAllDishes = async () => {
  try{
    let value = await AsyncStorage.getItem('dishes');
    return JSON.parse(value);
  } catch(error){
    alert(error)
  }
} 

export const getDish = async(id) => {
  try{
    let dishes = await AsyncStorage.getItem('dishes');
    dishes = JSON.parse(dishes)
    return dishes.find((dish) => dish.id == id)
  } catch(error){
    alert(error)
  }
}

export const updateDish = async(id, dish) => {
  let dishes = await AsyncStorage.getItem('dishes');
  dishes = JSON.parse(dishes);
  let selectedDishIndex = dishes.findIndex((dish) => dish.id == id)
  dishes[selectedDishIndex] = dish;
  await AsyncStorage.setItem('dishes',JSON.stringify(dishes));
  return {success: true}
}

export const userDishes = async () => {
  try {
    const user = await getCurrentUser();
    let dishes = await AsyncStorage.getItem('dishes');
    if(!!dishes){
      dishes = JSON.parse(dishes);
      return dishes.filter((dish) => dish.userId == user.id);
    }
  } catch (error) {
    alert(error)
  }

}

const getCurrentUser = async () => {
  try{
    const user = await currentUser()
    return user;
  }catch(error){
    alert(error)
  }
}

const setRecordId = async (dishes) => {
  try {
    if(!dishes) {
      return 1;
    }
    else{
      let ids = dishes.map(dish => dish.id);
      let maxImumValue = Math.max(...ids);
      return (maxImumValue + 1)
    }
  } catch (error) {
    
  }
}