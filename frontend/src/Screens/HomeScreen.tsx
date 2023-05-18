import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FrequentlySearch from '../Component/HomeComponent/FrequentlySearch';
import HomeHeader from '../Component/HomeComponent/HomeHeader';
import PromotionSection from '../Component/HomeComponent/PromotionSection';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <HomeHeader />
          <FrequentlySearch />
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
  },
});

export default HomeScreen;
