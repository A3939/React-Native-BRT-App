import React from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLOR} from '../../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    width: wp('10%'),
    height: hp('10%'),
    backgroundColor: COLOR.bgColor,
  },
});

export default Loader;
