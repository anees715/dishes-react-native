import { AsyncStorage } from "react-native";
import { currentUser } from "./AuthService";
import { getDish, updateDish } from './DishesService';

export const votePoints = {1: 30, 2: 20, 1: 10}

export const AddUserVote = async (dishId, point) => {
  try {
      let userPoints = await AsyncStorage.getItem('userPoints');
      let newUserPoints = JSON.parse(userPoints);
      if( !newUserPoints ){
        newUserPoints = {}
      }
      let userId = await currentUser().id;
      let currentUserVotes = {...(newUserPoints[userId] || {}), ...{[dishId]: point}}
      newUserPoints[userId] = currentUserVotes;
      await AsyncStorage.setItem('userPoints',JSON.stringify(newUserPoints));
      const addPoint = await addDishPoints(dishId, point);
      if (addPoint.success){
        return {success: true}
      }
    } catch(error) {
      alert(error)
    }
  }

  export const addDishPoints = async (dishId, point) => {
    try{
      let dish = await getDish(dishId);
      dish['points'] += point;
      return await updateDish(dishId, dish);
    }
    catch(error){
      alert(error)
    }
    
  }