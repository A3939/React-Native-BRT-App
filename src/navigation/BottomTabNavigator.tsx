/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import {COLOR, ROUTES} from '../constants';
import SearchNavigator from './SearchNavigator';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import BottomTabBar from '../Component/CommonComponent/BottomTabBar';
import BusMapScreen from '../Screens/BusMapScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLOR.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLOR.primary,
      })}
      initialRouteName={ROUTES.MAP_VIEW}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.SEARCH_NAVIGATOR} component={SearchNavigator} />
      <Tab.Screen name={ROUTES.MAP_VIEW} component={BusMapScreen} />
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
