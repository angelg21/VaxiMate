import React, { useState } from 'react';
import { View, Text, Image, FlatList, Button, Dimensions, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

const BabySchedule = () => {
    
    const data = [
        {
            id: 1,
            babyName: 'George Zarohur',
            gender: 'male',
            schedule: [
                {
                    date: '21/12/2022',
                    vaccines: [
                        { id: 1, type: 'BCC: Tuberculosis', dose: '1 Dosis' },
                        // Agrega más vacunas para la fecha 1
                    ]
                },
                {
                    date: '02/05/2023',
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

    // const route = useRoute();
    // const {babyId} = route.params;
    // console.log(babyId)

    const getImageSource = (gender) => {
        if (gender === 'male') {
            return require('../../../assets/gatearNiño.png');
        } else {
            return require('../../../assets/gatearNiña.png');
        }
    };

    const [selectedVaccines, setSelectedVaccines] = useState([]);

    const handleCheckBoxChange = (vaccineId) => {
        setSelectedVaccines((prevSelectedVaccines) => {
            const updatedSelectedVaccines = { ...prevSelectedVaccines };

            const selectedVaccinesArray = Object.values(updatedSelectedVaccines).flat();

            const index = selectedVaccinesArray.indexOf(vaccineId);
            if (index !== -1) {
                // Si la vacuna ya estaba seleccionada, se deselecciona
                selectedVaccinesArray.splice(index, 1);
            } else {
                // Si la vacuna no estaba seleccionada, se agrega al array de vacunas seleccionadas
                selectedVaccinesArray.push(vaccineId);
            }

            return selectedVaccinesArray;
        });
    };


    console.log(selectedVaccines)
    const handleSaveChanges = () => {
        console.log(selectedVaccines);
    };

    const renderCard = ({ item }) => {
        console.log(item)
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
                                        checked={selectedVaccines.includes(vaccine.id)}
                                        onPress={() => handleCheckBoxChange(vaccine.id)}
                                    />
                                    <Text style={styles.vaccineText}>{vaccine.type}: {vaccine.dose}</Text>
                                </View>
                            ))}
                            <TouchableOpacity style={styles.addButton} onPress={handleSaveChanges}>
                                <Image source={require('../../../assets/inyectadora.png')} style={styles.imageSave} />
                            </TouchableOpacity>
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

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth - 45;
const cardMarginRight = 15;

const styles = {
    container: {
        flex: 1,
        //padding: 15,
    },
    card: {
        marginBottom: 20,
    },
    infoSection: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    leftSection: {
        marginRight: 15,
    },
    rightSection: {

    },
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
        backgroundColor: '#B3E5FC',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: cardWidth,
        marginLeft: cardMarginRight,
        height: 300,
        borderWidth: 0.8,
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    vaccineItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    vaccineText: {
        fontSize: 16,
        marginLeft: 5,
    },
    addButton: {
        position: 'absolute',
        bottom: 25,
        width: 55,
        height: 55,
        borderRadius: 37,
        backgroundColor: '#B3E5FC',
        justifyContent: 'center',
        alignSelf: 'center',
        //borderWidth: 1,
    },
    addIcon: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    },
    imageSave: {
        width: 38,
        height: 38,
        alignSelf: 'center',
    }
};

export default BabySchedule;

