import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Calendar, DotMarking } from 'react-native-calendars';

const VaccinationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [vaccinations, setVaccinations] = useState([]);

    // Datos de ejemplo de esquema de vacunación
    const vaccinationScheme = {
        '2023-06-10': true, // Marcar el 10 de junio con un punto
        '2023-06-15': true, // Marcar el 15 de junio con un punto
        '2023-06-20': true, // Marcar el 20 de junio con un punto
    };

    // Datos de ejemplo de vacunas pendientes
    const vaccinationData = [
        { id: 1, babyName: 'George Zarohur', gender: 'male', date: '2023-06-10', doses: [{ type: 'BCC: Tuberculosis', dose: '1 Dosis' }] },
        { id: 2, babyName: 'Paula Castro', gender: 'female', date: '2023-06-15', doses: [{ type: 'HEPB: Hepatitis B', dose: '2 Dosis' }, { type: 'BCC: Tuberculosis', dose: '3 Dosis' }] },
        { id: 3, babyName: 'Cheaker Mouchatiny', gender: 'male', date: '2023-06-20', doses: [{ type: 'Pentavalente Rotavirus Neumococo', dose: '4 Dosis' }] },
        { id: 3, babyName: 'Ruben Lorenzo', gender: 'male', date: '2023-06-15', doses: [{ type: 'Varicela', dose: '2 Dosis' }] },
        // Agrega más datos de vacunas pendientes aquí
    ];

    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
        const selectedVaccinations = vaccinationData.filter((vaccination) => vaccination.date === date.dateString);
        setVaccinations(selectedVaccinations);
    };

    const markedDates = Object.keys(vaccinationScheme).reduce((acc, date) => {
        acc[date] = { marked: true };
        return acc;
    }, {});

    const renderDayMarker = (date) => {
        const marked = vaccinationScheme[date.dateString] === true;
        return <DotMarking marked={marked} />;
    };

    const getImageSource = (vaccination) => {
        if (vaccination.gender === 'male') {
            return require('../../assets/gatearNiño.png');
        } else {
            return require('../../assets/gatearNiña.png');
        }
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={handleDateSelect}
                markedDates={markedDates}
                renderDayMarker={renderDayMarker}
            />
            {vaccinations.length > 0 && (
                <View>
                    {vaccinations.map((vaccination) => (
                        <View  style={styles.card}>
                            <View style={styles.cardItem} key={vaccination.id}>
                                <View style={[styles.leftSection]}>
                                    <Image source={getImageSource(vaccination)} style={styles.image} />
                                </View>
                                <View style={styles.rightSection} key={vaccination.id}>
                                    <Text style={styles.babyName}>{vaccination.babyName}</Text>
                                    {vaccination.doses.map((dose, index) => (
                                        <Text key={index} style={styles.dose}>{dose.type}: {dose.dose}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        height: 'auto',
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    babyName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dose: {
        fontSize: 14,
        marginBottom: 5,
    },
    leftSection: {
        marginRight: 10,
    },
    rightSection: {

    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});

export default VaccinationCalendar;
