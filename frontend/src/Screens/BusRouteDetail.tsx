import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR} from '../constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icons} from '../assets/Icons';
import {convertInHourMin, minutesDiff} from '../Utils/TimeConversions';

const BusRouteDetail = ({route, navigation}: any) => {
  const [busDetail, setBusDetail] = useState<any>(route.params.data);
  const busDetailShow = route.params.busDetail;

  const Station = ({stationName, stationNumber}: any) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
        {stationNumber > 0 && (
          <View style={[styles.vLine, {marginLeft: wp('7%')}]}></View>
        )}
        <View style={styles.station}>
          <View style={styles.roundView}>
            <Image source={{uri: Icons.BUS}} style={styles.busIcon} />
          </View>
          <Text style={styles.stationNameText}>{stationName}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={{uri: Icons.LEFT_ARROW}} style={styles.backBtn} />
        </TouchableOpacity>
        <Image source={{uri: 'map'}} style={styles.mapBg} />
      </View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLOR.white,
          flex: 1,
          paddingTop: wp('5%'),
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.busDetail}>
            <View>
              <Text style={styles.busNumber}>{busDetail.busNo}</Text>
              <Text style={styles.routeName}>
                {busDetail.start_station} - {busDetail.end_station}
              </Text>
            </View>
            {!busDetailShow && (
              <View>
                <Text style={styles.price}>₹{busDetail.ticketPrice}</Text>
              </View>
            )}
          </View>
          {!busDetailShow && (
            <View style={styles.busTime}>
              <View style={styles.busArrive}>
                <Text style={styles.bustArriveTime}>
                  {convertInHourMin(busDetail.startTime)}
                </Text>
                <Text style={styles.busStation} numberOfLines={1}>
                  {busDetail.start_station}
                </Text>
              </View>
              <View style={styles.timeContainer}>
                <View style={styles.line}></View>
                <View style={styles.timeDiff}>
                  <Text style={styles.time}>
                    {minutesDiff(busDetail.startTime, busDetail.endTime)} min
                  </Text>
                </View>
                <View style={styles.line}></View>
              </View>
              <View style={styles.busReach}>
                <Text style={styles.bustReachTime}>
                  {convertInHourMin(busDetail.endTime)}
                </Text>
                <Text style={styles.busStation} numberOfLines={1}>
                  {busDetail.end_station}
                </Text>
              </View>
            </View>
          )}
          <View style={styles.horizontalLine}></View>
          <View style={styles.stationsContainer}>
            {busDetail.route.map((station: any, index: number) => {
              return (
                <Station
                  key={index}
                  stationNumber={index}
                  stationName={station}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BusRouteDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {},
  backBtn: {
    color: COLOR.primary,
    marginLeft: 20,
    width: wp('5%'),
    height: wp('5%'),
  },
  backBtnContainer: {
    position: 'absolute',
    zIndex: 999,
    top: wp('10%'),
    height: wp('20%'),
    width: wp('20%'),
    justifyContent: 'center',
  },
  mapBg: {
    width: wp('100%'),
    height: wp('50%'),
    opacity: 0.3,
  },
  mainContainer: {
    justifyContent: 'center',
    marginBottom: wp('30%'),
    paddingTop: Platform.OS === 'ios' ? 0 : wp('5%'),
  },
  busNumber: {
    fontSize: wp('7%'),
    fontWeight: '600',
    color: COLOR.primary,
  },
  routeName: {
    fontSize: wp('5.5%'),
    fontWeight: '600',
    color: COLOR.primary,
    width: wp('70%'),
  },
  busDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingTop: wp('4%'),
  },
  price: {
    fontSize: wp('8%'),
    fontWeight: '600',
    color: COLOR.primary,
  },
  busTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('5%'),
  },
  busArrive: {
    height: wp('13%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bustArriveTime: {
    fontSize: wp('6%'),
    fontWeight: '500',
    color: COLOR.primary,
  },
  busStation: {
    fontSize: wp('3.5%'),
    fontWeight: '400',
    color: COLOR.gray,
    width: wp('28%'),
  },
  time: {
    fontSize: wp('3%'),
    fontWeight: '400',
    color: COLOR.gray,
  },
  timeDiff: {
    width: wp('15%'),
    height: wp('6%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLOR.primary,
  },
  line: {
    width: wp('7%'),
    height: wp('.2%'),
    backgroundColor: COLOR.primary,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  busReach: {
    height: wp('13%'),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bustReachTime: {
    fontSize: wp('6%'),
    fontWeight: '500',
    color: COLOR.primary,
  },
  stationsContainer: {
    marginTop: wp('10%'),
    paddingHorizontal: wp('8%'),
  },
  station: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundView: {
    backgroundColor: COLOR.primary,
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  busIcon: {
    width: wp('5%'),
    height: wp('5%'),
    tintColor: COLOR.white,
  },
  stationNameText: {
    fontSize: wp('5%'),
    fontWeight: '500',
    color: COLOR.primary,
    width: wp('55%'),
    marginLeft: wp('4%'),
  },
  vLine: {
    width: wp('0.3%'),
    height: wp('10%'),
    backgroundColor: COLOR.primary,
    flexDirection: 'row',
  },
  horizontalLine: {
    width: wp('100%'),
    height: wp('1.5%'),
    backgroundColor: COLOR.grayLight,
    marginTop: wp('5%'),
  },
});
