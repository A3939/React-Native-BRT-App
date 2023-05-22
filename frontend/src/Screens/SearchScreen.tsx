import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const SearchScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView keyboardDismissMode="interactive">
        <View style={styles.container}>
          <SearchHeader />
          <SearchForm navigation={navigation} />
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
    marginBottom: wp('40%'),
  },
});
