import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState(''); 
    const [nomeCompleto, setNomeCompleto] = useState(''); 

    function handleExibeMensagem() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txt}>{nomeCompleto}</Text>

            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder='nome'
                style={styles.input}
            />
            
            <TextInput
                onChangeText={setSobrenome}
                value={sobrenome}
                placeholder='sobrenome'
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity> 

        </View>
    );
}


