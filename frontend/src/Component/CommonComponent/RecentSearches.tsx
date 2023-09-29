/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOR, ROUTES} from '../../constants';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import axios from 'axios';
import {apiFindRoute} from '../../network/API';
import {Icons} from '../../assets/Icons';

const RecentSearches = ({navigation}: any) => {
  const [history, setHistory] = useState<any>([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      searchHistory();
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    searchHistory();
  }, []);

  const searchHistory = async () => {
    try {
      let getSearchHistory = await AsyncStorage.getItem('searchHistory');
      if (getSearchHistory !== null) {
        if (JSON.parse(getSearchHistory).length > 10) {
          await AsyncStorage.clear();
        }
        setHistory(JSON.parse(getSearchHistory));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const findRoute = async (startStation: string, endStation: string) => {
    console.log(startStation, endStation, 'start and end');
    const response = await apiFindRoute(startStation, endStation);
    await navigation.navigate(ROUTES.ROUTE_BUS_LIST, {
      station: startStation + ' to ' + endStation,
      data: response,
    });
  };

  return (
    <>
      <Header title="Recent Search" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {history?.map((data: any, index: number) => (
          <TouchableOpacity
            onPress={() => findRoute(data.startStation, data.endStation)}>
            <View key={index} style={styles.container}>
              <View style={styles.content}>
                <Text style={styles.subTitle}>BRTS</Text>
                <Text style={styles.route}>
                  {data?.startStation} {'  '}
                  <Image
                    source={{uri: Icons.EXCHANGE_ARROW}}
                    style={styles.exchangeIcon}
                  />
                  {'  '}
                  {data?.endStation}
                </Text>
                <Text style={styles.tag}>Via BRTS</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.priceBtn}>
                  <Text style={styles.price}>$ 15</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        {history.length === 0 && (
          <Text style={styles.noRecord}>No Recent Search Found...</Text>
        )}
      </ScrollView>
    </>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.bgColor,
    width: wp('85%'),
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  content: {
    // flexWrap: 'wrap',
  },
  priceBtn: {
    backgroundColor: COLOR.primary,
    paddingVertical: wp('1.5%'),
    paddingHorizontal: wp('8%'),
    borderRadius: 5,
  },
  price: {
    color: '#FFFFFF',
    fontSize: wp('4%'),
  },
  subTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLOR.gray,
  },
  route: {
    flexWrap: 'wrap',
    fontSize: wp('5%'),
    width: wp('55%'),
    color: COLOR.primary,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tag: {
    color: COLOR.gray,
  },
  exchangeIcon: {
    padding: 10,
    width: wp('5%'),
    height: wp('5%'),
  },
  noRecord: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});
