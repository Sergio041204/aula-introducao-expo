import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo, descricao, preco, img}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.preco}>{descricao}</Text>
            <Text style={styles.preco}>{preco}</Text>
            <Image source={img} style={styles.imagem} /> 
        </View>
    );
}


export default Card;