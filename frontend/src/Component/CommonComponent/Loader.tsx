import React from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import { COLOR } from '../../constants';

// Utility
const {width, height} = Dimensions.get('window');

const Loader = (props: any) => {
  return props.visible ? (
    <Animated.View style={styles.container}>
      <LottieView
        style={styles.animationStyle}
        source={require('../../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </Animated.View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationStyle: {
    width: '20%',
    height: '50%',
    // backgroundColor: COLOR.white,
  },
});

export default Loader;
