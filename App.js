import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade01 from './src/Atividades/atv-01';
import Atividade02 from './src/Atividades/atv-02';
import Atividade03 from './src/Atividades/atv-03';
import Atividade04 from './src/Atividades/atv-04';
import Atividade05 from './src/Atividades/atv-05';


import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';
import Exemplo03 from './src/exemplos/ex03';
import Exemplo04 from './src/exemplos/ex04';
import Exemplo05 from './src/exemplos/ex05';


export default function App(){
  return (
    <View style={styles.container}>
      <Atividade05 />
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
