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

const RouteFind = ({navigation}: any) => {
  // const [data, setData] = useState();

  // const findRoute = async (values: any) => {
  //   console.log('loading');
  //   await axios
  //     .get(
  //       'http://192.168.1.52:5001/api/BRT/' +
  //         values.startStation +
  //         '/' +
  //         values.endStation,
  //     )
  //     .then(response => {
  //       console.log(response.data, 're');
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

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
      const historyData = await AsyncStorage.getItem('searchHistory');
      if (history !== null) {
        // We have data!!
        history = JSON.parse(historyData);
      }
      if (history === null) {
        console.log(history, 'local null');
        history = [values];
      } else {
        history = [...history, values];
      }
    } catch (error) {
      // Error retrieving data
    }

    console.log(history, 'history');

    // if (history.length > 5) {
    //   const clearData = await AsyncStorage.removeItem('searchHistory');
    //   console.log(clearData, 'clear data');
    // }

    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(history));
    } catch (error) {
      // Error saving data
    }
  };

  const findRoute = async () => {
    await axios
      .get(
        'http://192.168.1.52:5001/api/BRT/' + startStation + '/' + endStation,
      )
      .then(response => {
        navigation.navigate(ROUTES.ROUTE_BUS_LIST, {
          station: startStation + ' to ' + endStation,
          data: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getBusList = async () => {
    await axios
      .get('http://192.168.1.52:5001/api/BRT')
      .then(response => {
        setFilteredData(response.data);
        setMasterData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const ItemView = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (startStationChange) {
            setStartStation(item.start_station);
          } else {
            setEndStation(item.start_station);
          }
        }}>
        <Text style={styles.busStop}>{item.start_station}</Text>
      </TouchableOpacity>
    );
  };

  const searchStartStationFilter = (text: any) => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.start_station.toLowerCase()
          ? item.start_station.toLowerCase()
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
      const newData = masterData.filter(item => {
        const itemData = item.start_station.toLowerCase()
          ? item.start_station.toLowerCase()
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
          await findRoute();
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
                  // handleChange('startStation');
                  searchStartStationFilter(text);
                  // setStartStation(text);
                }}
                // onFocus={setStartStationChange(true)}
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
                  // handleChange('startStation');
                  searchEndStationFilter(text);
                  // setEndStation(text);
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
            {/* <Button title="Submit" /> */}
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
        // ItemSeparatorComponent={ItemSeparatorView}
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
