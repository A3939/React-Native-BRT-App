import React from 'react';
import HomeHeader from '../Component/HomeComponent/HomeHeader';
import {Button, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FrequentlySearch from '../Component/HomeComponent/FrequentlySearch';
import PromotionSection from '../Component/HomeComponent/PromotionSection';

const HomeScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <HomeHeader />
          <FrequentlySearch />
          <PromotionSection />
          <Button
            title="Search"
            onPress={() => props.navigation.navigate('Search')}
          />
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
