import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const SearchHeader = () => {
  return (
    <View>
      <Text style={styles.searchHeading}>What are you looking for ?</Text>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  searchHeading: {
    fontSize: wp('10%'),
    fontWeight: 'bold',
    color: '#1C203D',
  },
});
