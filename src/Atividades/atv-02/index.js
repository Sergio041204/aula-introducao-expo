import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import azul from '../../..assets/brasilAzul.jpg';
import branco from '../../..assets/brasilBranco.jpg';
import preta from  '../../..assets/brasilPreta.jpg';

import Card from './card';

function Atividade02 () {

    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Card 
                titulo={'Camisa Azul'} 
                texto={'Camisa numero dois.'}
                valor={'R$ 499,00'}
                img={azul}
            />
            <Card 
                titulo={'Camisa Preta'} 
                texto={'Camisa homenagem.'}
                valor={'R$ 399,00'}
                img={preta}
            />
             <Card
                titulo={'Camisa Branca'}
                texto={'Camisa Vintage.'}
                valor={'R$ 300,00'}   
                img={branco}
            />
            
        </View>
    );
}

export default Atividade02;