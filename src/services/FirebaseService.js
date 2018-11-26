import * as firebase from 'firebase';
import { fireBaseConfig } from '../config/secrets';
import uuid from 'uuid';
import { FileSystem } from 'expo';


export const uploadToStorage = async (image) => {
  alert("reached here")
  if (!firebase.apps.length) {
    firebase.initializeApp(fireBaseConfig);
  }
  try{
    const response = await FileSystem.readAsStringAsync(image, {encoding: FileSystem.EncodingTypes.Base64});
    const blob = await response.blob();
    alert("reached 2")
    const ref = firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);
    return snapshot.downloadURL;
  }catch(error){
    alert(error);
  }
}