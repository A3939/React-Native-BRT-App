import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Header from '../CommonComponent/Header';
import RouteFind from '../CommonComponent/RouteFind';
import SuggestionBox from '../CommonComponent/SuggationBox';
import {COLOR} from '../../constants';

const SearchForm = ({navigation, isLoader, setIsLoader}: any) => {
  return (
    <View>
      <View style={styles.formHeader}>
        <Text style={styles.formHeading}>BRT Route Check</Text>
      </View>
      <View style={styles.form}>
        <RouteFind
          navigation={navigation}
          setIsLoader={setIsLoader}
          isLoader={isLoader}
        />
      </View>
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  formHeader: {
    marginTop: 20,
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLOR.primary,
  },
  formHeading: {
    textAlign: 'center',
    fontSize: wp('4%'),
    color: '#ffffff',
  },
  form: {
    // marginVertical: 15,
  },
});
