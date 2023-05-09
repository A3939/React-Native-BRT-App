import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <View>
          <Text style={styles.headingText}>Aldairtiyna</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>Find your BRT</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.avatarImg}
          source={require('../../assets/images/Profile_pic.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headingText: {
    fontSize: wp('8%'),
    color: '#1C203D',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: wp('4%'),
    color: '#6C6C6C',
  },
  avatarImg: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: 10,
  },
});

export default HomeHeader;
