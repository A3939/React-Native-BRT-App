import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';


const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
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
