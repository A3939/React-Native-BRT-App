import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icons} from '../../assets/Icons';
import {COLOR} from '../../constants';

const Ticket = ({busData}: any) => {
  return (
    <View style={styles.ticketContainer}>
      <View style={styles.title}>
        <View>
          <Text style={styles.busNumber}>{busData.busNo}</Text>
          <Text style={styles.busName}>
            {busData.start_station} - {busData.end_station}
          </Text>
        </View>
        <View>
          <Text style={styles.ticketPrice}>$ 15</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.cutLine}>- - - - - - - - - - - - - - - - - -</Text>
      </View>
      <View style={styles.codeView}>
        <Text style={styles.busCode}>NRG</Text>
        <View style={styles.busLineIcon}>
          <Text style={styles.busLine}>o----</Text>
          <Image source={{uri: Icons.BUS}} style={styles.busIcon} />
          <Text style={styles.busLine}>----o</Text>
        </View>
        <Text style={styles.busCode}>ICR</Text>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  ticketContainer: {
    width: wp('85%'),
    height: wp('50%'),
    padding: 20,
    borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: COLOR.primary,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  busNumber: {
    fontSize: wp('7%'),
    fontWeight: '500',
    color: '#1C203D',
  },
  busName: {
    width: wp('50%'),
    fontSize: wp('4.5%'),
    color: '#1C203D',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  ticketPrice: {
    fontSize: wp('7%'),
    color: '#1C203D',
    fontWeight: 'bold',
  },
  cutLine: {
    fontSize: Platform.OS === 'ios' ? wp('6%') : wp('7%'),
    color: '#1C203D',
  },
  codeView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  busCode: {
    fontSize: wp('5%'),
    fontWeight: '500',
    color: '#1C203D',
  },
  busLineIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  busLine: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#1C203D',
  },
  busIcon: {
    width: wp('5%'),
    height: wp('5%'),
  },
});
