import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FrequentlySearch from '../Component/HomeComponent/FrequentlySearch';
import HomeHeader from '../Component/HomeComponent/HomeHeader';
import PromotionSection from '../Component/HomeComponent/PromotionSection';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <HomeHeader />
          <FrequentlySearch />
          <PromotionSection />
          <PromotionSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginStart: 20,
    marginEnd: 20,
    marginBottom: wp('25%'),
  },
});

export default HomeScreen;
