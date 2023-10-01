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

const SplashScreen = ({navigation}) => {
  const netInfo = useNetInfo();
  useEffect(() => {
    checkInternet();
  }, [netInfo]);
  const checkInternet = ()=>{
     setTimeout(() => {
       if (netInfo.isConnected) {
         navigation.replace(ROUTES.BOTTOM_HOME);
       }
     }, 3000);
  };
  return (
    <View>
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
    width: '100%',
    height: '100%',
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
});
