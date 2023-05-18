import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={ROUTES.HOME} component={HomeScreen} /> */}
      <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
