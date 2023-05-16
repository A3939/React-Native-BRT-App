import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../CommonComponent/Header';
import Ticket from '../CommonComponent/Ticket';
import axios from 'axios';

type Bus = {
  _id: string;
  busNo: string;
  start_station: string;
  end_station: string;
  route: [];
};

const FrequentlySearch = () => {
  const [data, setData] = useState<Bus[]>();

  const getBusList = async () => {
    await axios
      .get('http://192.168.1.52:5001/api/BRT')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBusList();
  }, []);

  return (
    <View>
      <Header title="Most Search" subTitle="View all" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.map((bus): any => (
          <Ticket key={bus._id} busData={bus} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FrequentlySearch;
