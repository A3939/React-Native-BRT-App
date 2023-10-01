import { Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { COLOR } from '../../constants';

const BusLoaderModal = isLoader => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isLoader}>
        <LottieView
          style={styles.animationStyle}
          source={require('../../assets/animations/bus_running.json')}
          autoPlay
          loop
        />
      </Modal>
    </View>
  );
};

export default BusLoaderModal;

const styles = StyleSheet.create({
  animationStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.white
  },
});