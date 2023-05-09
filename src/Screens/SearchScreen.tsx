import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchHeader from '../Component/SearchComponent/SearchHeader';
import SearchForm from '../Component/SearchComponent/SearchForm';

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
