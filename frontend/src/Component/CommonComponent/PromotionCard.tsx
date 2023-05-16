import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const promoImg = require('../../assets/images/promotions_1.png');

const PromotionCard = () => {
  return (
    <View style={styles.promoContainer}>
      <Image style={styles.promoImg} source={promoImg} />
    </View>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  promoContainer: {
    width: wp('90%'),
    height: wp('50%'),
    backgroundColor: '#FFFFFF',
  },
  promoImg: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
});
