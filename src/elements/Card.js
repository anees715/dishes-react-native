import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import VoteButton from '../elements/VoteButton';

const Card = (props) => {
  const { item, onPressButton, showVoteOption, userVotes } = props;
  return (
    <View >
      <View style={styles.container}>
        { !!item.image && <Image source={{uri: item.image}} style={styles.image}/> }
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.votes}>
            {item.points} Points
          </Text>
        </View>
        <Text>{item.description}</Text>
        {
          showVoteOption && 
          <View style={styles.voteActions}>
            <VoteButton itemId={item.id} voted={() => isUserVoted(item.id, userVotes) } onPressButton={onPressButton} />
          </View>
        }
      </View>
      </View>
    </View>
  );
}

const isUserVoted = (id, userVotes) =>{
  if(userVotes){
    return Object.value(userVotes).includes(id);
  }else{
    return false
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#efefef',
    marginHorizontal: 10,
    marginTop: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    elevation: 1,
    backgroundColor : "#ffffff",
    shadowRadius: 5
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
  voteActions: {
    borderTopWidth: 1,
    borderColor: '#efefef',
    marginTop: 15,
    paddingTop: 15,
    alignItems: 'flex-end',
    flex: 1
  }
});  

export default Card;
