import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {DataVacunas} from '../../components/DataVacunas'

const  Immunization= () => {
    const navigation = useNavigation();
    const handleVacunaPress = (id) => {
        navigation.navigate('Article', { id });
    };

    const containerColors = ["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8"];

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {DataVacunas.map((vacuna, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.button, { backgroundColor: containerColors[index % containerColors.length] }]}
                        onPress={() => handleVacunaPress(index)}
                    >
                        <Text style={styles.buttonText}>{vacuna.nombre}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#ebebeb',
        color: '#333333',
        fontSize: 20,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        textAlign: 'center',
    },
});


export default Immunization;