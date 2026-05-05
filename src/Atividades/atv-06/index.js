import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    

    const calcularImc = () =>  {
        const resultado = peso / (altura * altura);
        setImc (resultado, toFixed (2)); 
    }

    return (
        <View style = {styles.container}>
          <Text Style={styles.titulo}
    >Calculadora IMC</Text>

    <TextInput
       placeholder = "Peso (kg)"
       keyboardType = "numeric"
       style = {styles.input}
       value = {peso}
       onChangeText = {setPeso}/>

    <TextInput
        placeholder = "Altura (m)"
        keyboardType = "numeric"
        style = {styles.input}
        value = {altura}
        onChangeText = {setAltura}/>   

    <Button title = "Calcular IMC"
        onPress = {calcular IMC} />

        {imc && <Text
        style = {styles.resultado} >IMC: {imc}</
        Text>}
        </View>

    );
}

const styles = StyleSheet.creat({
    container: {
        flex: 1,
        justifyContent:  'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBotton: 10,
        borderRadius: 5,
    },
    resultado: {
        marginTop: 20,
        FontSize: 20,
        textAlign: 'center',
    },
});
