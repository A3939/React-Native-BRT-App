import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen from './src/Screens/SearchScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <HomeScreen />
        <SearchScreen />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeedf2',
  },
});

export default App;
