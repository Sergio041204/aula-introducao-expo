import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5), 
        borderColor: 'darkslategrey', 
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '90%', 
        alignItems: 'center', 
        marginBottom: RFPercentage(1), 
    }, 
    titulo: {
        fontSize: RFPercentage(3.5), 
        fontWeight: 'bolder', 
        color: 'darkslategrey', 
    }, 
    descricao: {
        fontSize: RFPercentage(2), 
        color: '#222',
        fontWeight: 'bolder', 
    }, 
        preco: {
        fontSize: RFPercentage(3.5), 
        color: '#222',
        fontWeight: 'bolder', 
    }
});

export default styles;