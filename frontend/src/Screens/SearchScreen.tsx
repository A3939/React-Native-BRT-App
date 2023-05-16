import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchForm />
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
