import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade01 from './src/Atividades/atv-01';
import Atividade02 from './src/Atividades/atv-02';

import Atividade01 from './src/Atividades/atv-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00290a',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
  
});
