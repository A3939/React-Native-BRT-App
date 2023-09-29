/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import {COLOR, ROUTES} from '../constants';
import SearchNavigator from './SearchNavigator';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icons} from '../assets/Icons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLOR.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLOR.primary,
        tabBarIcon: ({color, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? Icons.HOME : Icons.HOME;
          } else if (route.name === ROUTES.SEARCH_NAVIGATOR) {
            iconName = focused ? Icons.SEARCH : Icons.SEARCH;
          }

          return <Image source={{uri: iconName}} style={styles.bottomIcon} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.SEARCH_NAVIGATOR} component={SearchNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 0,
    bottom: wp('8%'),
    height: wp('15%'),
    right: 20,
    left: 20,
    alignItems: 'center',
    borderRadius: 50,
  },
  bottomIcon: {
    width: wp('6%'),
    height: wp('6%'),
    marginTop: Platform.OS === 'ios' ? wp('7%') : wp('0%'),
  },
});
