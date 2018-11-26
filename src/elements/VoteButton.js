import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VoteButton = (props) => {
  const {itemId, voted, onPressButton} = props;
  return (
    <TouchableOpacity onPress={() => onPressButton(itemId)}>
      { voted ? 
        <View>
            <MaterialCommunityIcons
            name="arrow-up-bold-box-outline"
            size={25}
            color="#1fb755"
          />
          <Text style={styles.voteLabel}>Vote</Text>
        </View>
        :
        <View>
          <MaterialCommunityIcons
          name="arrow-up-bold-box"
          size={25}
          color="#1fb755"
        />
        <Text style={styles.voteLabel}>Voted</Text>
        </View>
      }
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  voteLabel: {
    fontSize: 12,
    color: '#9ea29f'
  }
});
export default VoteButton;
