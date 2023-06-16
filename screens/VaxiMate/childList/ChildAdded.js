import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ChildCard from '../../../components/ChildCard';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChildAdded = () => {
    // Datos de ejemplo de varios niños
    const childrenData = [
        { id: 1, name: 'George Zarohur', gender: 'male', age: 6, weight: '7 lbs', height: '20 inches', given: 5, due: 1, upcoming: 2 },
        { id: 2, name: 'Paula Castro', gender: 'female', age: 8, weight: '8 lbs', height: '22 inches', given: 2, due: 0, upcoming: 1 },
        { id: 3, name: 'Cheaker Mouchatiny', gender: 'male', age: 4, weight: '6 lbs', height: '18 inches', given: 1, due: 2, upcoming: 1 },
        { id: 4, name: 'Ruben Lorenzo', gender: 'male', age: 8, weight: '4 lbs', height: '16 inches', given: 3, due: 3, upcoming: 0 },
        // Agrega más datos de niños aquí
    ];

    const navigation = useNavigation();
    const handleAddChild = () => {
        navigation.navigate('FormsChild1');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.childrenContainer}>
                {childrenData.map((baby) => (
                    baby && <ChildCard key={baby.id} baby={baby} />
                ))}
            </ScrollView>
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
        width: 75,
        height: 75,
        borderRadius: 37,
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        fontSize: 24,
        color: 'white',
    },
});