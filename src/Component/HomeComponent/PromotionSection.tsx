import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../CommonComponent/Header';
import PromotionCard from '../CommonComponent/PromotionCard';
import {apiGetAdvertisements} from '../../network/API';
import {ROUTES} from '../../constants';

const PromotionSection = ({navigation}: any) => {
  const [advertisements, setAdvertisements] = useState([]);
  useEffect(() => {
    getAdvertisements();
  }, []);
  const getAdvertisements = async () => {
    // setIsLoader(true);
    const response = await apiGetAdvertisements();
    setAdvertisements(response);
    // setIsLoader(false);
  };

  const openLink = link => {
    console.log('hello', link);
    navigation.navigate(ROUTES.WEB_VIEW, {webLink: link});
  };

  return (
    <View style={styles.promoSec}>
      <Header title="Promotion" subTitle="View all" />
      {/* <PromotionCard /> */}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={advertisements}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <PromotionCard key={index} item={item} openLink={openLink} />
        )}
      />
    </View>
  );
};

export default PromotionSection;

const styles = StyleSheet.create({
  promoSec: {
    marginBottom: 15,
  },
});
