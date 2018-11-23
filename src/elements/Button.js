import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

export default (props) => {
  const { text, onPressButton} = props;
  return(
    <TouchableHighlight style={styles.button} onPress={onPressButton}>
      <Text>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 200,
    backgroundColor: '#f39c12',
    height: 53,
    borderRadius: 30
  }
})