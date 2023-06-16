import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChildCard = ({ baby }) => {
    const [isOpen, setIsOpen] = useState(false);
    const animatedHeight = useState(new Animated.Value(0))[0];

    const toggleCard = () => {
        Animated.timing(animatedHeight, {
            toValue: isOpen ? 0 : 200, // Adjust the height as needed
            duration: 300, // Adjust the animation duration as needed
            useNativeDriver: false,
        }).start();
        setIsOpen(!isOpen);
    };

    const getImageSource = () => {
        if (baby.gender === 'male') {
            return require('../assets/gatearNiño.png');
        } else {
            return require('../assets/gatearNiña.png');
        }
    };

    const getBorderColor = () => {
        if (baby.gender === 'male') {
            return '#6287B3';
        } else {
            return '#FFB6CC';
        }
    };

    return (
        <TouchableOpacity onPress={toggleCard} style={[styles.container, { borderColor: getBorderColor() }]}>
            <View style={[styles.leftSection]}>
                <Image source={getImageSource()} style={styles.image} />
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.name}>{baby.name}</Text>
                <Text style={styles.age}>{baby.age} meses</Text>
                {!isOpen && (
                    <View style={styles.infoContainer}>
                        <View style={styles.infoColumn}>
                            <Text style={styles.infoTitle}>Dadas</Text>
                            <Text style={styles.infoValue}>{baby.given}</Text>
                        </View>
                        <View style={styles.infoColumn}>
                            <Text style={styles.infoTitle}>Pendientes</Text>
                            <Text style={styles.infoValue}>{baby.due}</Text>
                        </View>
                        <View style={styles.infoColumn}>
                            <Text style={styles.infoTitle}>Proximas</Text>
                            <Text style={styles.infoValue}>{baby.upcoming}</Text>
                        </View>
                    </View>
                )}
                {isOpen && (
                    <Animated.View style={[styles.additionalInfo, { height: animatedHeight }]}>
                        <Text style={styles.info}>Weight: {baby.weight}</Text>
                        <Text style={styles.info}>Height: {baby.height}</Text>
                        <View style={styles.infoContainerOpen}>
                            <View style={styles.givenOpen}>
                                <Text style={styles.infoTitle}>Dosis dadas/Total pendientes</Text>
                                <Text style={styles.infoValue}>{baby.given}/8</Text>
                                <Text style={styles.infoValue}>{8-baby.given} Dosis Pendientes</Text>
                            </View>
                            <View style={styles.upcommingOpen}>
                                <Text style={styles.infoTitle}>Proximas</Text>
                                <Text style={styles.infoValue}>{baby.upcoming} Vacunas</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Visualizar Esquema</Text>
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        borderWidth: 2,
    },
    leftSection: {
        marginRight: 10,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    rightSection: {
        flex: 1,
    },
    icon: {
        fontSize: 24,
        color: '#000',
    },
    name: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    age: {
        fontSize: 14,
        color: '#888',
        marginTop: 6,
    },
    additionalInfo: {
        overflow: 'hidden',
    },
    info: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 8,
    },
    infoColumn: {
        alignItems: 'center',
    },
    infoTitle: {
        fontSize: 14,
        color: 'black',
    },
    infoValue: {
        marginTop: 5,
        fontSize: 14,
        color: 'black',
    },
    infoContainerOpen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 8,
    },
    givenOpen: {
    },
    upcommingOpen: {
        marginTop: 0,
        marginRight: 30,
    },
    buttonContainer: {
        padding: 10,
        width: '80%',
        height: 45,
        marginTop: 25,
        borderRadius: 30,
        backgroundColor:'#202c94'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
});

export default ChildCard;
