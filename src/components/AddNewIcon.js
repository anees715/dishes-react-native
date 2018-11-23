import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
const AddNewIcon = (props) => (
  <View style={styles.buttonContainer}>
    <MaterialCommunityIcons
      name="plus-outline"
      size={90}
      color="#efefef"
    />
    <Text style={styles.text}>Add New</Text>
  </View>
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