import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';

const SearchScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchForm navigation={navigation} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
});
