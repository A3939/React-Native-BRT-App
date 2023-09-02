import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RecentSearches from '../Component/CommonComponent/RecentSearches';
import SuggestionBox from '../Component/CommonComponent/SuggationBox';

const SearchScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true} keyboardDismissMode="interactive">
        {/* <ScrollView> */}
        <View style={styles.container}>
          <SearchHeader />
          <RecentSearches navigation={navigation} />
          <SearchForm navigation={navigation} />
          {/* <SuggestionBox /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: wp('60%'),
  },
});
