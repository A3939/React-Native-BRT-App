import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RecentSearches from '../Component/CommonComponent/RecentSearches';
import Loader from '../Component/CommonComponent/Loader';
import BusLoaderModal from '../Component/CommonComponent/BusLoaderModal';

const SearchScreen = ({navigation}: any) => {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SearchHeader />
          <RecentSearches navigation={navigation} />
          <SearchForm
            navigation={navigation}
            setIsLoader={setIsLoader}
            isLoader={isLoader}
          />
        </View>
      </ScrollView>
      {/* <Loader visible={isLoader} /> */}
      <BusLoaderModal isLoader={isLoader} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: wp('50%'),
  },
});
