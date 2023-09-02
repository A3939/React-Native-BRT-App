/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR, ROUTES} from '../../constants';
import {SearchValidationSchema} from '../../validationSchema/SearchSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import {apiFindRoute, apiGetBusStationList} from '../../network/API';

const RouteFind = ({navigation}: any) => {
  const [startStation, setStartStation] = useState('');
  const [startStationChange, setStartStationChange] = useState(true);
  const [endStation, setEndStation] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    getBusList();
  }, []);

  const storeRecentSearch = async (values: {
    startStation: string;
    endStation: string;
  }) => {
    values.startStation = startStation;
    values.endStation = endStation;
    let history;

    try {
      const historyData: any = await AsyncStorage.getItem('searchHistory');
      if (history !== null) {
        history = JSON.parse(historyData);
      }
      if (history === null) {
        console.log(history, 'local null');
        history = [values];
      } else {
        history = [...history, values];
      }
    } catch (error) {
      console.log('error', error);
    }

    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(history));
    } catch (error) {
      console.log('error', error);
    }
  };

  const findRoute = async (startStation: string, endStation: string) => {
    const response = await apiFindRoute(startStation, endStation);
    await navigation.navigate(ROUTES.ROUTE_BUS_LIST, {
      station: startStation + ' to ' + endStation,
      data: response,
    });
  };

  const getBusList = async () => {
    const response = await apiGetBusStationList();
    setFilteredData(response);
    setMasterData(response);
  };

  const ItemView = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (startStationChange) {
            setStartStation(item.stationName);
          } else {
            setEndStation(item.stationName);
          }
          setFilteredData(masterData);
        }}>
        <Text style={styles.busStop}>{item.stationName}</Text>
      </TouchableOpacity>
    );
  };

  const searchStartStationFilter = (text: any) => {
    if (text) {
      const newData = masterData.filter((item: any) => {
        const itemData = item.stationName.toLowerCase()
          ? item.stationName.toLowerCase()
          : '';
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setStartStation(text);
    } else {
      setFilteredData(masterData);
      setStartStation(text);
    }
  };

  const searchEndStationFilter = (text: any) => {
    if (text) {
      const newData = masterData.filter((item: any) => {
        const itemData = item.stationName.toLowerCase()
          ? item.stationName.toLowerCase()
          : '';
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setEndStation(text);
    } else {
      setFilteredData(masterData);
      setEndStation(text);
    }
  };

  return (
    <View style={styles.searchRoute}>
      <Formik
        validationSchema={SearchValidationSchema}
        initialValues={{startStation, endStation}}
        onSubmit={async values => {
          await findRoute(startStation, endStation);
          storeRecentSearch(values);
        }}>
        {({
          // handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View>
            <View style={styles.inputStation}>
              <FontAwesome5Icon
                style={styles.searchIcon}
                name="bus"
                size={22}
                color={'#1C203D'}
              />
              <TextInput
                name="startStation"
                style={styles.inputFiled}
                onChangeText={(text: any) => {
                  console.log(text, 'text');
                  setStartStationChange(true);
                  setFieldValue('startStation', text);
                  searchStartStationFilter(text);
                }}
                onBlur={handleBlur('startStation')}
                value={startStation}
                defaultValue={values.startStation}
                placeholder="Start Destination"
                placeholderTextColor={'#6C6C6C'}
              />
            </View>
            {errors.startStation && touched.startStation && (
              <Text style={styles.errorText}>{errors.startStation}</Text>
            )}
            <View style={styles.inputStation}>
              <FontAwesome5Icon
                style={styles.searchIcon}
                name="bus"
                size={22}
                color={'#1C203D'}
              />
              <TextInput
                name="endStation"
                style={styles.inputFiled}
                onChangeText={(text: any) => {
                  console.log(text, 'text');
                  setStartStationChange(false);
                  setFieldValue('endStation', text);
                  searchEndStationFilter(text);
                }}
                onBlur={handleBlur('endStation')}
                value={endStation}
                defaultValue={values.endStation}
                placeholder="End Destination"
                placeholderTextColor={'#6C6C6C'}
              />
            </View>
            {errors.endStation && touched.endStation && (
              <Text style={styles.errorText}>{errors.endStation}</Text>
            )}
            <Pressable style={styles.searchBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Find Route</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <Header title="Stops" />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </View>
  );
};

export default RouteFind;

const styles = StyleSheet.create({
  searchRoute: {
    marginBottom: wp('40%'),
  },
  inputStation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 15,
  },
  suggestionList: {
    marginTop: 0,
  },
  searchIcon: {
    marginLeft: 15,
  },
  inputFiled: {
    marginLeft: 10,
    fontSize: wp('4.5%'),
    width: wp('75%'),
    color: COLOR.black
  },
  searchBtn: {
    backgroundColor: '#1C203D',
    padding: 15,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 8,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: wp('5%'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: wp('3.5%'),
    color: 'red',
  },
  busStop: {
    fontSize: wp('4.5%'),
    padding: 10,
    margin: 3,
    borderRadius: 10,
    color: COLOR.primary,
    backgroundColor: COLOR.bgColor,
  },
});
