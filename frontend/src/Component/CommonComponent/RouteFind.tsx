/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import {Formik} from 'formik';
import React, {useState} from 'react';
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
import {ROUTES} from '../../constants';
import {SearchValidationSchema} from '../../validationSchema/SearchSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const storeRecentSearch = async (values: {
    startStation: string;
    endStation: string;
  }) => {
    let history;
    try {
      const historyData = await AsyncStorage.getItem('searchHistory');
      if (history !== null) {
        // We have data!!
        history = JSON.parse(historyData);
      }
      history = [...history, values];
    } catch (error) {
      // Error retrieving data
    }

    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(history));
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <View>
      <Formik
        validationSchema={SearchValidationSchema}
        initialValues={{startStation: '', endStation: ''}}
        onSubmit={values => {
          // await findRoute(values);
          // console.log(data, 'data');
          axios
            .get(
              'http://192.168.1.52:5001/api/BRT/' +
                values.startStation +
                '/' +
                values.endStation,
            )
            .then(response => {
              navigation.navigate(ROUTES.ROUTE_BUS_LIST, {
                station: values.startStation + ' to ' + values.endStation,
                data: response.data,
              });
            })
            .catch(error => {
              console.log(error);
            });
          storeRecentSearch(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
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
                onChangeText={handleChange('startStation')}
                onBlur={handleBlur('startStation')}
                value={values.startStation}
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
                onChangeText={handleChange('endStation')}
                onBlur={handleBlur('endStation')}
                value={values.endStation}
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
      {/* <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '100%',
                alignSelf: 'center',
                height: 50,
                justifyContent: 'center',
                borderBottomWidth: 0.5,
                borderColor: '#8e8e8e',
              }}
              onPress={() => {}}>
              <Text style={{fontWeight: '600'}}>{item.country}</Text>
            </TouchableOpacity>
          );
        }}
      /> */}
    </View>
  );
};

export default RouteFind;

const styles = StyleSheet.create({
  inputStation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 15,
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
});
