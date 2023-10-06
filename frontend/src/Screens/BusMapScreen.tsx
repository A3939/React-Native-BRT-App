import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icons} from '../assets/Icons';
import {mapData} from '../constants/mapData';
import {LocationPermission} from '../Utils/Permissions';
import Geolocation from '@react-native-community/geolocation';
import {
  PERMISSIONS,
  check,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';
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
  const mapRef = useRef<any>(null);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        setLocationPermission(result);
      });
      await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        setLocationPermission(result);
      });
    } else {
      await Geolocation.requestAuthorization(
        () => {
          setLocationPermission('granted');
        },
        () => {
          setLocationPermission('denied');
          console.log('error');
        },
      );
    }
  };

  const handleCenter = () => {
    if (mapRef.current !== null) {
      const {latitude, longitude} = coordinates;
      const latitudedelta = 0.15;
      const longitudedelta = 0.15;
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: latitudedelta,
        longitudeDelta: longitudedelta,
      });
    }
  };

  const zoomToLocation = () => {
    if (mapRef.current !== null) {
      const {latitude, longitude} = coordinates;
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        },
        2500,
      );
    }
  };

  useEffect(() => {
    if (mapRef) {
      handleCenter();
    }
  }, [coordinates]);

  useEffect(() => {
    if (locationPermission === 'granted') {
      const watchId = Geolocation.watchPosition(
        success => {
          console.log(success, 'suc');
          setLatitude(success.coords.latitude);
          setLongitude(success.coords.longitude);
          setCoordinates({
            latitude: success.coords.latitude,
            longitude: success.coords.longitude,
          });
          console.log('false');
          // setIsLoader(false);
        },
        error => {
          console.log('false');
          // setIsLoader(false);
          console.log(error, 'error');
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
        },
      );

      return () => {
        Geolocation.clearWatch(watchId);
      };
    }
  }, [locationPermission]);

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
      {latitude !== null && longitude !== null && (
        <MapView
          ref={mapRef}
          style={styles.map}
          onMapReady={() => {
            setIsLoader(false);
            zoomToLocation();
          }}
          initialRegion={{
            latitude: latitude,
            longitude: latitude,
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
                style={{
                  width: wp('10%'),
                  height: wp('12%'),
                }}
                source={{uri: Icons.CURRENT_LOCATION}}
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
      {locationPermission === 'blocked' && (
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
            Manually Grant permission from App Setting to see you Location & Bus
            stations
          </Text>
        </View>
      )}
      <Loader visible={isLoader} />
      <TouchableOpacity
        onPress={zoomToLocation}
        style={{
          width: wp('15%'),
          height: wp('15%'),
          position: 'absolute',
          backgroundColor: COLOR.white,
          bottom: wp('10%'),
          right: wp('5%'),
          borderRadius: wp('10%'),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          style={{width: wp('8%'), height: wp('8%')}}
          source={{uri: Icons.GET_LOCATION}}
        />
      </TouchableOpacity>
    </>
  );
};

export default BusMapScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
