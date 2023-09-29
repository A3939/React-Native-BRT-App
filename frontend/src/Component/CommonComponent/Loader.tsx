import React from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {COLOR} from '../../constants';

// Utility
const {width, height} = Dimensions.get('window');

const Loader = (props: any) => {
  return props.visible ? (
    <Animated.View style={style.container}>
      <SkypeIndicator size={50} color={COLOR.white} />
    </Animated.View>
  ) : null;
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
