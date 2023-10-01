import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
  },
});
