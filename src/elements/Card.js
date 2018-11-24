import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const Card = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        {/* TODO - Show Image */}
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.votes}>
            0 votes
          </Text>
        </View>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  votes:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});  

export default Card;
