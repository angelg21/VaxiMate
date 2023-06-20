import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { loginUser } from '../../components/auth/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePressRegister = () => {
        navigation.navigate('Register');
    };

    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_Regular: Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    
    const loginValidation = (email, password) => {
        if (email === '') {
            setError('El campo email no puede estar vacío');
            return 1;
        }
        if (password === '') {
            setError('El campo password no puede estar vacío');
            return 1;
        }
        if (!email.includes('@')) {
            setError('Formato de Correo Electronico incorrecto');
            return 1;
        }
    };

    const handleLogin = async (email, password) => {
        const cod = loginValidation(email, password)
        if(cod === 1)
            return
        try {
            const token = await loginUser(email, password, setError);
            if (token) {
                setError('')
                AsyncStorage.setItem('token', token);
                navigation.navigate('NavHome');
                
            } else {
            }
        } catch (error) {
            setError('Usuario o contraseña invalido')
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>VaxiMate</Text>
            <View style={styles.textContainer}>
                <Text style={styles.subTittle}>Ingresa a tu cuenta</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.textContainer}>
                <Text style={styles.forgotPasswordText}>Olvidaste tu constraseña?</Text>
            </View>
            {error !== '' && <Text style={styles.errorText}>{error}</Text>}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleLogin(email, password)}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <Text style={styles.accountText}>No tienes una cuenta?
                <TouchableOpacity onPress={handlePressRegister}>
                    <Text style={styles.singUpText}> Registrate</Text>
                </TouchableOpacity>
            </Text>
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
        marginTop: 50,
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
        color: '#202c94',
    },
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: 55,
        marginTop: 15,
    }
});

export default Login;
