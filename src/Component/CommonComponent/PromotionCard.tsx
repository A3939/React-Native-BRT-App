import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { COLOR } from '../../constants';
import { Icons } from '../../assets/Icons';

const PromotionCard = ({item, openLink}) => {
  return (
    <Pressable
      style={styles.promoContainer}
      onPress={() => openLink(item.advertisementLink)}>
      <Image
        style={styles.promoImg}
        source={{
          uri: item.advertisementImage,
        }}
        defaultSource={{uri: Icons.IMG_LOAD}}
      />
    </Pressable>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  promoContainer: {
    width: wp('85%'),
    height: wp('50%'),
    backgroundColor: 'transparent',
    marginHorizontal: wp('1%'),
  },
  promoImg: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 10,
    // backgroundColor: COLOR.primary,
  },
  
});
