/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import PreviewScreen from './src/screens/PreviewScreen'

import SimpleNavigator from './src/components/simplenavigator/SimpleNavigator'

const navigatorConfig = {
  'home': HomeScreen,
  'preview': PreviewScreen
}


const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <SimpleNavigator firstScreen={'home'} navigatorConfig={navigatorConfig}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left:0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white'
  }
});

export default App;
