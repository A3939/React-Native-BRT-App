import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RouteBusList from '../Screens/RouteBusList';
import SearchScreen from '../Screens/SearchScreen';
import {ROUTES} from '../constants';
import BusRouteDetail from '../Screens/BusRouteDetail';

const Stack = createNativeStackNavigator();
const SearchNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SEARCH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.SEARCH}
        options={{headerShown: false}}
        component={SearchScreen}
      />
      <Stack.Screen
        name={ROUTES.ROUTE_BUS_LIST}
        component={RouteBusList}
        initialParams={{station: '', data: []}}
      />
      <Stack.Screen
        name={ROUTES.BUS_ROUTE_DETAIL}
        component={BusRouteDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
