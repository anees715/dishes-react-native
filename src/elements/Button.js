import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

export default (props) => {
  const { text, onPressButton} = props;
  const { elementStyles } = props;
  return(
    <TouchableHighlight style={[styles.button, elementStyles]} onPress={onPressButton}>
      <Text style={styles.textContent}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  textContent: {
    color: '#ffffff',
    textTransform: 'uppercase' 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 300,
    backgroundColor: '#f39c12',
    height: 50,
    borderRadius: 30,
    marginTop: 10
  }
})