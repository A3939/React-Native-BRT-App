import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RouteFind from '../CommonComponent/RouteFind';
import Header from '../CommonComponent/Header';

const SearchForm = () => {
  return (
    <View>
      <View style={styles.formHeader}>
        <Text style={styles.formHeading}>BRT Route Check</Text>
      </View>
      <View style={styles.form}>
        <RouteFind />
      </View>
      <View>
        <Header title="Recent searches" subtitle="" />
      </View>
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  formHeader: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 20,
  },
  formHeading: {
    textAlign: 'center',
    fontSize: wp('4%'),
    color: '#1C203D',
  },
  form: {
    marginVertical: 15,
  },
});
