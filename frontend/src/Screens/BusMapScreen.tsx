import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icons} from '../assets/Icons';
import {mapData} from '../constants/mapData';
import {LocationPermission} from '../Utils/Permissions';
import Geolocation from '@react-native-community/geolocation';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import Loader from '../Component/CommonComponent/Loader';
import {COLOR} from '../constants';

const BusMapScreen = () => {
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  const [coordinates, setCoordinates] = useState<any>({
    latitude: 23.022503333333333,
    longitude: 72.57136166666666,
  });
  const [locationPermission, setLocationPermission] = useState<any>(null);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    getPermission();
  }, []);

  useEffect(() => {
    getMyLocation();
  }, [locationPermission]);

  const getPermission = () => {
    setIsLoader(true);
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      setLocationPermission(result);
    });
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      setLocationPermission(result);
    });
    setIsLoader(false);
  };
  const getMyLocation = () => {
    setIsLoader(true);
    if (locationPermission === 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error, 'error');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 10000,
        },
      );
    }
    setIsLoader(false);
  };

  const CustomMarker = ({coordinate}) => {
    return (
      <Marker coordinate={coordinate}>
        <Image
          resizeMode="cover"
          style={{width: wp('8%'), height: wp('8%')}}
          source={{uri: Icons.BUS_PIN}}
        />
      </Marker>
    );
  };

  return (
    <>
      {latitude !== null && (
        <MapView
          style={styles.map}
          initialRegion={{
            // latitude: 23.022503333333333,
            // longitude: 72.57136166666666,
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}>
          {mapData.map(coordinate => {
            return <CustomMarker coordinate={coordinate} />;
          })}
          {locationPermission === 'granted' && (
            <Marker coordinate={coordinates}>
              <Image
                resizeMode="cover"
                style={{width: wp('8%'), height: wp('8%')}}
                source={{uri: Icons.USER_PIN}}
              />
            </Marker>
          )}
        </MapView>
      )}
      {locationPermission === 'denied' && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: wp('5%'),
          }}>
          <Text
            style={{
              fontSize: wp('6%'),
              fontWeight: '600',
              textAlign: 'center',
              color: COLOR.primary,
            }}>
            Grant permission to see you Location & Bus stations
          </Text>
        </View>
      )}
      <Loader visible={isLoader} />
    </>
  );
};

export default BusMapScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
