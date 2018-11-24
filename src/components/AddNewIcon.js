import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
const AddNewIcon = (props) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={props.onPressItem}>
    <MaterialCommunityIcons
      name="plus-outline"
      size={90}
      color="#efefef"
    />
    <Text style={styles.text}>Add New</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonContainer: {
    borderStyle: 'dashed', 
    borderWidth: 1, 
    borderRadius: 10,
    borderColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120
  },
  text: {
    marginVertical: 5,
    color: '#efefef'
  }
})

export default AddNewIcon;