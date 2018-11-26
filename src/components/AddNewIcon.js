import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
const AddNewIcon = (props) => {
  const { image } = props;
  return(
  <TouchableOpacity style={styles.buttonContainer} onPress={props.onPressItem}>
    {image ? 
      <Image source={{uri: image}} style={styles.image}/>
    :
    <View>
      <MaterialCommunityIcons
        name="plus-outline"
        size={90}
        color="#f1f1f1"
      />
      <Text style={styles.text}>Add New</Text>
    </View>
    }
  </TouchableOpacity>
)
  }

const styles = StyleSheet.create({
  buttonContainer: {
    borderStyle: 'dashed', 
    borderWidth: 1, 
    borderRadius: 10,
    borderColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    },
  text: {
    marginVertical: 5,
    color: '#f1f1f1',
    textAlign: 'center'
  },
  image: {
    resizeMode: 'cover', 
    width: 120, 
    height: 120,
    borderRadius: 10
  }
})

export default AddNewIcon;