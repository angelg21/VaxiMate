import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';

function Register() {
    const navigation = useNavigation();

    const handlePressRegister = () => {
        navigation.navigate('NavHome');
    };

    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_Regular: Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>VaxiMate</Text>
            <View style={styles.textContainer}>
                <Text style={styles.subTittle}>Create your Account</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Email'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
            />
            <TextInput
                style={styles.input}
                placeholder='Confirm Password'
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handlePressRegister}
            >
                    <Text 
                        style={styles.buttonText}>Sign Up
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignSelf: 'flex-start',
        marginLeft: 56,
    },
    tittle: {
        fontFamily: 'MontserratBold',
        fontSize: 60,
        color: '#202c94',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    subTittle: {
        fontFamily: 'Roboto_Regular',
        fontSize: 18,
        color: 'gray',
        marginTop: 40,
    },
    input: {
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 40,
        borderRadius: 30,
        backgroundColor: '#202c94'
    },
    buttonText: {
        fontFamily: 'MontserratBold',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    forgotPasswordText: {
        fontFamily: 'Roboto_Regular',
        fontSize: 18,
        color: 'gray',
        marginTop: 20,
    },
    accountText: {
        fontFamily: 'Roboto_Regular',
        fontSize: 18,
        color: 'black',
        marginTop: 50,
    },
    singUpText: {
        fontFamily: 'Roboto_Regular',
        fontSize: 20,
        color: '#a024b4',
    },
});

export default Register;
