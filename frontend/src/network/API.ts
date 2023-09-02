// const axios = require('axios');
// const api = axios.create({
//   baseURL: 'http://192.168.139.223:5001/api/BRT',
//   timeout: 1000,
//   headers: {
//     'Accept': 'application/json',
//   }
// });

import axios from 'axios';
const baseURL = 'http://192.168.207.223:5001/api/BRT/';

export const apiGetBusList = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const apiFindRoute = async (startStation: string, endStation: string) => {
    try {
        const response = await axios.get(baseURL + startStation + '/' + endStation);
        return response.data;
    } catch (error) {
        console.log('error', error);
    return null;
    }

};

export const apiGetBusStationList = async () => {
    try {
        const response = await axios
        .get(`${baseURL}stations`)
        return response.data 
    } catch (error) {
        console.log('error', error);
        return null;
    }
  
  };