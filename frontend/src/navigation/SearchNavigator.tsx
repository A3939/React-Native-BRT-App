import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import HomeScreen from '../Screens/HomeScreen';
import {ROUTES} from '../constants';
import RouteBusList from '../Screens/RouteBusList';
import SearchScreen from '../Screens/SearchScreen';

const Stack = createNativeStackNavigator();
const SearchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SEARCH}>
      <Stack.Screen
        name={ROUTES.SEARCH}
        options={{headerShown: false}}
        component={SearchScreen}
      />
      <Stack.Screen
        name={ROUTES.ROUTE_BUS_LIST}
        component={RouteBusList}
        options={({route}: any) => ({
          title: route.params.station,
        })}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
