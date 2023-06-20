import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, CheckBox, Button } from 'react-native';

const ScheduleBaby = () => {
    const data = [
        {
            id: 1,
            babyName: 'George Zarohur',
            gender: 'male',
            schedule: [
                {
                    date: 'Fecha 1',
                    vaccines: [
                        { id: 1, type: 'BCC: Tuberculosis', dose: '1 Dosis' },
                        // Agrega más vacunas para la fecha 1
                    ]
                },
                {
                    date: 'Fecha 2',
                    vaccines: [
                        { id: 2, type: 'HEPB: Hepatitis B', dose: '2 Dosis' },
                        { id: 3, type: 'BCC: Tuberculosis', dose: '3 Dosis' },
                        // Agrega más vacunas para la fecha 2
                    ]
                },
                // Agrega más fechas y vacunas
            ]
        },
        // Agrega más datos de bebés aquí
    ];

    const getImageSource = (gender) => {
        if (gender === 'male') {
            return require('../../assets/gatearNiño.png');
        } else {
            return require('../../assets/gatearNiña.png');
        }
    };

    const [selectedVaccines, setSelectedVaccines] = useState([]);

    const handleCheckboxChange = (vaccineId) => {
        let updatedSelectedVaccines = [...selectedVaccines];
        if (updatedSelectedVaccines.includes(vaccineId)) {
            updatedSelectedVaccines = updatedSelectedVaccines.filter((id) => id !== vaccineId);
        } else {
            updatedSelectedVaccines.push(vaccineId);
        }
        setSelectedVaccines(updatedSelectedVaccines);
    };

    const handleSaveChanges = () => {
        // Guarda los cambios en la base de datos para las vacunas seleccionadas
        console.log('Vacunas seleccionadas:', selectedVaccines);
    };

    const renderCard = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.infoSection}>
                    <View style={styles.leftSection}>
                        <Image source={getImageSource(item.gender)} style={styles.image} />
                    </View>
                    <View style={styles.rightSection}>
                        <Text style={styles.babyName}>{item.babyName}</Text>
                    </View>
                </View>
                <FlatList
                    data={item.schedule}
                    renderItem={({ item: scheduleItem }) => (
                        <View style={styles.scheduleCard}>
                            <Text style={styles.date}>{scheduleItem.date}</Text>
                            {scheduleItem.vaccines.map((vaccine) => (
                                <View key={vaccine.id} style={styles.vaccineItem}>
                                    <CheckBox
                                        value={selectedVaccines.includes(vaccine.id)}
                                        onValueChange={() => handleCheckboxChange(vaccine.id)}
                                    />
                                    <Text style={styles.vaccineText}>{vaccine.type}: {vaccine.dose}</Text>
                                </View>
                            ))}
                            <Button title="Guardar" onPress={handleSaveChanges} />
                        </View>
                    )}
                    keyExtractor={(scheduleItem) => scheduleItem.date}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        marginBottom: 20,
    },
    infoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    leftSection: {
        marginRight: 10,
    },
    rightSection: {},
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    babyName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scheduleCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    vaccineItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    vaccineText: {
        fontSize: 14,
        marginLeft: 5,
    },
};

export default ScheduleBaby;
