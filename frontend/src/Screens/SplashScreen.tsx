/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import LottieView from 'lottie-react-native';
import {COLOR, ROUTES} from '../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {resetNav} from '../Helper/NavReset';

const SplashScreen = ({navigation}) => {
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected) {
      setTimeout(() => {
        resetNav(navigation, ROUTES.BOTTOM_HOME);
      }, 3000);
    }
  }, [netInfo.isConnected]);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animationStyle}
        source={require('../assets/animations/bus_running.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  animationStyle: {
    width: wp('40%'),
    height: hp('40%'),
  },
  loadText: {
    color: COLOR.black,
    position: 'absolute',
    top: hp('70%'),
    left: wp('25%'),
    fontSize: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('50%'),
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: wp('50%'),
  },
});
