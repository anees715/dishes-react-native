import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../elements/Card';

const CardList = (props) => {
  const { items, onPressButton, userVotes, showVoteOption } = props;
  return (
    <FlatList
        data={items}
        keyExtractor={(item, index)=>{
          return index.toString();
        }}
        renderItem={(item) => {
          return(
            <Card item={item.item} 
                  onPressButton={ onPressButton } 
                  userVotes={userVotes} 
                  showVoteOption={showVoteOption}/>
          );
        }}/>
  );
}

export default CardList;
