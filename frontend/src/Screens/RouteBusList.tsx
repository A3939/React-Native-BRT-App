import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ticket from '../Component/CommonComponent/Ticket';
import {COLOR, ROUTES} from '../constants';
import {Icons} from '../assets/Icons';

const RouteBusList = ({route, navigation}: any) => {
  const handleTicketView = (bus: any) => {
    navigation.navigate(ROUTES.BUS_ROUTE_DETAIL, {
      data: bus,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={{uri: Icons.LEFT_ARROW}} style={styles.backBtn} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{route.params.station}</Text>
      </View>
      <View style={styles.listView}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          {route.params?.data.map((bus: {_id: any}) => (
            <TouchableOpacity
              key={bus._id}
              onPress={() => {
                handleTicketView(bus);
              }}>
              <Ticket key={bus._id} busData={bus} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default RouteBusList;

const styles = StyleSheet.create({
  container: {
    marginBottom: wp('20%'),
    height: hp('73%'),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.primary,
    height: wp('40%'),
    paddingTop: Platform.OS === 'ios' ? wp('5%') : 0,
  },
  backBtn: {
    marginLeft: 20,
    width: wp('5%'),
    height: wp('5%'),
    tintColor: COLOR.white,
  },
  headerTitle: {
    textAlign: 'center',
    flex: 0.9,
    color: '#FFFFFF',
    fontSize: wp('5%'),
    maxWidth: wp('70%'),
    marginRight: wp('10%'),
  },
  listView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
