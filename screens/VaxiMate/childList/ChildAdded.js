import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import ChildCard from '../../../components/ChildCard';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getBabyData } from '../../../components/auth/Auth';
import { useEffect, useState } from 'react';

const ChildAdded = () => {

    const [childList, setChildList] = useState([]); 
    const navigation = useNavigation();
    const [mensaje, setMensaje] = useState('');  

    useEffect(() => {
        obtenerChildData();
    }, []);                                                         

    useEffect(() => {
        obtenerChildData();
    }, [childList]); 

    async function obtenerChildData() {
        try {
            const childData = await getBabyData();
            if (childData) {
                setChildList(childData.childsData)
                setMensaje('')
            }
            else {
                setMensaje('Empieza presionando el boton de abajo para agregar un bebe a tu lista de seguimiento')
            }
        } catch (error) { 
            console.error(error);
            // Manejo de errores, si es necesario
            return [];
        }
    }

    const handleAddChild = () => {
        navigation.navigate('FormsChild1');
    };


    return (
        <View style={styles.container}> 
            {childList.length === 0 ? (
                <View style={styles.containerM}>
                    <Text style={styles.mensaje}>{mensaje}</Text>
                </View>
            ) : (
                <ScrollView style={styles.childrenContainer}>
                    {childList.map((baby) => baby && <ChildCard key={baby.id} baby={baby} />)} 
                </ScrollView>
            )
            } 
            <TouchableOpacity style={styles.addButton} onPress={handleAddChild}>
                <FontAwesome name="plus" style={styles.addIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default ChildAdded;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    addButton: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 37,
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        fontSize: 24,
        color: 'white',
    },
    mensaje: {
        fontSize: 20,
        textAlign: 'center',
    },
    containerM: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});