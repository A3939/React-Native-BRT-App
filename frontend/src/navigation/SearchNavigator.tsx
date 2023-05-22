import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RouteBusList from '../Screens/RouteBusList';
import SearchScreen from '../Screens/SearchScreen';
import {ROUTES} from '../constants';

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
    </Stack.Navigator>
  );
};

export default SearchNavigator;
