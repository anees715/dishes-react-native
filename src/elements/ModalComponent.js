import React from 'react';
import {
  View,
  StyleSheet,
  Modal
} from 'react-native';

const ModalComponent = (props) => {
  const {modalVisible, onRequestClose, containerStyle, modalBody} = props;
  return (
    <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={[containerStyle, styles.container]}>
          {modalBody}
        </View>
      </Modal>
  );
}

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});