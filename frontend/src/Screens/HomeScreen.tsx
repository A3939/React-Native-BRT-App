import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FrequentlySearch from '../Component/HomeComponent/FrequentlySearch';
import HomeHeader from '../Component/HomeComponent/HomeHeader';
import PromotionSection from '../Component/HomeComponent/PromotionSection';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Loader from '../Component/CommonComponent/Loader';

const HomeScreen = ({navigation}: any) => {
  const [isLoader, setIsLoader] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeContainer}>
          <HomeHeader />
          <FrequentlySearch
            navigation={navigation}
            setIsLoader={setIsLoader}
            isLoader={isLoader}
          />
          <PromotionSection navigation={navigation} />
          <PromotionSection navigation={navigation} />
        </View>
      </ScrollView>
      <Loader visible={isLoader} />
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
