import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const HomePage = () => {
    const data = [
        { id: 1, babyName: 'George Zarohur', gender: 'male', doses: [{ type: 'BCC: Tuberculosis', dose: '1 Dosis' }] },
        { id: 2, babyName: 'Paula Castro', gender: 'female', doses: [{ type: 'HEPB: Hepatitis B', dose: '2 Dosis' }, { type: 'BCC: Tuberculosis', dose: '3 Dosis' }] },
        { id: 3, babyName: 'Cheaker Mouchatiny', gender: 'male', doses: [{ type: 'Pentavalente Rotavirus Neumococo', dose: '4 Dosis' }] },
        { id: 4, babyName: 'Ruben Lorenzo', gender: 'male', doses: [{ type: 'Varicela', dose: '2 Dosis' }] },
        // Agrega más datos de tarjetas aquí
    ];

    const getImageSource = (vaccination) => {
        if (vaccination.gender === 'male') {
            return require('../../assets/gatearNiño.png');
        } else {
            return require('../../assets/gatearNiña.png');
        }
    };

    const renderCard = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardItem}>
                    <View style={styles.leftSection}>
                        <Image source={getImageSource(item)} style={styles.image} />
                    </View>
                    <View style={styles.rightSection}>
                        <Text style={styles.babyName}>{item.babyName}</Text>
                        {item.doses.map((dose, index) => (
                            <Text key={index} style={styles.dose}>{dose.type}: {dose.dose}</Text>
                        ))}
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
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
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        height: 200,
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
    rightSection: {},
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
};

export default HomePage;
