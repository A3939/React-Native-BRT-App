import React, {useEffect, useState} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import Header from '../CommonComponent/Header';
import Ticket from '../CommonComponent/Ticket';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecentSearches from '../CommonComponent/RecentSearches';
import {apiGetBusList} from '../../network/API';
import {ROUTES} from '../../constants';
import Loader from '../CommonComponent/Loader';

type Bus = {
  _id: string;
  busNo: string;
  start_station: string;
  end_station: string;
  route: [];
};

const FrequentlySearch = ({navigation, setIsLoader, isLoader}: any) => {
  const [data, setData] = useState<Bus[]>();

  const getBusList = async () => {
    setIsLoader(true);
    const response: any = await apiGetBusList();
    setData(response);
    setIsLoader(false);
  };

  useEffect(() => {
    getBusList();
  }, []);

  const handleTicketView = (bus: any) => {
    navigation.navigate(ROUTES.BUS_ROUTE_DETAIL, {
      data: bus,
    });
  };

  return (
    <View>
      <Header title="Most Search" subTitle="View all" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.map((bus): any => (
          <TouchableOpacity
            key={bus._id}
            onPress={() => {
              handleTicketView(bus);
            }}>
            <Ticket key={bus._id} busData={bus} />
          </TouchableOpacity>
        ))}
        {/* <RecentSearches navigation={navigation} /> */}
      </ScrollView>
    </View>
  );
};

export default FrequentlySearch;
