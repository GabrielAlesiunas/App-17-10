import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Application ID  QpMirY5FW0fORrbLm0jvfkJrXKMOtqIT6lLKHX6j
// JavaScript key  efLWlwSpDT3hzjdqtArPvMQNmMC69RF808Q0dp8I


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
