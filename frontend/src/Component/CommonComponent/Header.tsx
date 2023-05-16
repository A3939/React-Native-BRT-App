import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Header = ({title, subTitle}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: wp('5.5%'),
    color: '#1C203D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: wp('4%'),
    color: '#1C203D',
    fontWeight: '500',
  },
});
