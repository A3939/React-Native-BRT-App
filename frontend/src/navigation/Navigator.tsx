import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from '../Screens/SplashScreen';
import WebViewScreen from '../Screens/WebViewScreen';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SPLASH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
      <Stack.Screen name={ROUTES.BOTTOM_HOME} component={BottomTabNavigator} />
      <Stack.Screen name={ROUTES.WEB_VIEW} component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
