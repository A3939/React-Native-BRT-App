import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../CommonComponent/Header';
import PromotionCard from '../CommonComponent/PromotionCard';

const PromotionSection = () => {
  return (
    <View style={styles.promoSec}>
      <Header title="Promotion" subTitle="View all" />
      <PromotionCard />
    </View>
  );
};

export default PromotionSection;

const styles = StyleSheet.create({
  promoSec: {
    marginBottom: 15,
  },
});
