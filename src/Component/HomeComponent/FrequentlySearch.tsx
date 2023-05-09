import React from 'react';
import {View} from 'react-native';
import Header from '../CommonComponent/Header';
import Ticket from '../CommonComponent/Ticket';

const FrequentlySearch = () => {
  return (
    <View>
      <Header title="Most Search" subTitle="View all" />
      <Ticket />
    </View>
  );
};

export default FrequentlySearch;
