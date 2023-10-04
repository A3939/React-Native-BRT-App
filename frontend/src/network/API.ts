import axios from 'axios';
// const baseURL = 'https://brts.onrender.com/api/BRT/';
// const adBaseURL = 'https://brts.onrender.com/api/';
const baseURL = 'http://192.168.1.239:5001/api/BRT/';
const adBaseURL = 'http://192.168.1.239:5001/api/';
export const apiGetBusList = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const apiFindRoute = async (
  startStation: string,
  endStation: string,
) => {
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
    const response = await axios.get(`${baseURL}stations`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const apiGetAdvertisements = async () => {
  try {
    const response = await axios.get(adBaseURL + 'advertisements');
    return response.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
