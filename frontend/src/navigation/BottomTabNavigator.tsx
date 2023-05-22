/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import {COLOR, ROUTES} from '../constants';
import SearchNavigator from './SearchNavigator';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === ROUTES.SEARCH_NAVIGATOR) {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Icon name={iconName} size={26} color={color} />;
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
});
