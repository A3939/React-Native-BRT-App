import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';
import {COLOR} from '../constants';
import Loader from '../Component/CommonComponent/Loader';

const WebViewScreen = ({route}) => {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: wp('6%'),
          fontWeight: '700',
          color: COLOR.primary,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: wp('3%'),
          flexWrap: 'wrap',
        }}>
        This is advertisement from Aldairtiyna
      </Text>
      <WebView
        source={{uri: route.params.webLink}}
        style={{flex: 1}}
        onLoadStart={() => setIsLoader(true)}
        onLoadEnd={() => setIsLoader(false)}
      />
      <Loader visible={isLoader} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
