import "firebase/auth"

import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import Store from './src/Redux/Store';

export default function App() {



  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
