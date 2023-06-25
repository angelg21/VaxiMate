import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import notificationsSchedule from '../components/notificationSchedule';

function Intro() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_1: Roboto_400Regular,
        Roboto_2: Roboto_700Bold,
    });
    if (!fontsLoaded) {
        return null; 
    } 

    const handleGetStarted = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/imagenIntro.jpg')} style={styles.backgroundImage}>
                <View style={styles.contentContainer}>
                    <Text style={styles.appName}>Inmunizate 593</Text>
                    <Text style={styles.subtitle}>Confianza en cada dosis</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Empezar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
    },
    appName: {
        fontFamily: 'MontserratBold',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'Roboto_1',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#202c94',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        fontFamily: 'MontserratBold',
        color: 'white',
        fontSize: 18,
    },
});



export default Intro;
