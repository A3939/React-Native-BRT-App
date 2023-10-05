import React, {useState} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RecentSearches from '../Component/CommonComponent/RecentSearches';
import Loader from '../Component/CommonComponent/Loader';
import BusLoaderModal from '../Component/CommonComponent/BusLoaderModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SearchScreen = ({navigation}: any) => {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === 'ios'}
        extraScrollHeight={hp('24%')}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <SearchHeader />
          <RecentSearches navigation={navigation} />
          <SearchForm
            navigation={navigation}
            setIsLoader={setIsLoader}
            isLoader={isLoader}
          />
        </View>
      </KeyboardAwareScrollView>
      <Loader visible={isLoader} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: wp('50%'),
    flex: 1,
  },
});
