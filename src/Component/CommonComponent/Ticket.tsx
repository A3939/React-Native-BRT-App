import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Ticket = () => {
  return (
    <View style={styles.ticketContainer}>
      <View style={styles.title}>
        <View style={styles.aboutBus}>
          <Text style={styles.busNumber}>8D</Text>
          <Text style={styles.busName}>Naroda Gam-Iskcon Cross Road</Text>
        </View>
        <View>
          <Text style={styles.ticketPrice}>$ 15</Text>
        </View>
      </View>
      <View>
        <Text style={styles.cutLine}>
          - - - - - - - - - - - - - - - - - - - - - -
        </Text>
      </View>
      <View style={styles.codeView}>
        <Text style={styles.busCode}>NRG</Text>
        <View style={styles.busLineIcon}>
          <Text style={styles.busLine}>o----</Text>
          <FontAwesome5 name="bus" size={22} color={'#1C203D'} />
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
    width: wp('90%'),
    height: wp('55%'),
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
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
    fontSize: wp('5%'),
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
    fontSize: wp('7%'),
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
});
