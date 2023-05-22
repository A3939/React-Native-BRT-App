/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOR} from '../../constants';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecentSearches = () => {
  const [history, setHistory] = useState([]);
  const searchHistory = async () => {
    try {
      let getSearchHistory = await AsyncStorage.getItem('searchHistory');
      if (getSearchHistory !== null) {
        // We have data!!
        setHistory(JSON.parse(getSearchHistory));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    searchHistory();
    console.log(history, 'home his');
  }, []);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {history?.map((data, index): any => (
        <>
          <View key={index} style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.subTitle}>BRTS</Text>
              <Text style={styles.route}>
                {data?.startStation} {'  '}
                <FontAwesome5Icon
                  style={styles.exchangeIcon}
                  name="exchange-alt"
                  size={22}
                  color={'#1C203D'}
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
        </>
      ))}
    </ScrollView>
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
    flexWrap: 'wrap',
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
  },
  route: {
    flexWrap: 'wrap',
    fontSize: wp('5%'),
    width: wp('55%'),
    color: COLOR.primary,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tag: {},
  exchangeIcon: {
    padding: 10,
  },
});
