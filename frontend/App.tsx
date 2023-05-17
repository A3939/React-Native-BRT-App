import React from 'react';
// import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen from './src/Screens/SearchScreen';

//screen
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App = () => {
//   return (
//     <SafeAreaView style={styles.appContainer}>
//       <ScrollView keyboardShouldPersistTaps="handled">
//         <HomeScreen />
//         <SearchScreen />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#eeedf2',
//   },
// });

export default App;
