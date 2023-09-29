import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import SearchForm from '../Component/SearchComponent/SearchForm';
import SearchHeader from '../Component/SearchComponent/SearchHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RecentSearches from '../Component/CommonComponent/RecentSearches';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loader from '../Component/CommonComponent/Loader';

const SearchScreen = ({navigation}: any) => {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
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
      <Loader visible={isLoader} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: wp('60%'),
  },
});
