import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import { createUser } from '../../components/auth/Auth';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('Personal de salud');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [check, setCheck] = useState('');


    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_Regular: Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }


    const handleRegister = (email, password, name, role, phone, address, confirmPassword) => {
        const cod = signUpHandler(email, password, name, role, phone, address, confirmPassword)
        if(cod === 1)
            return
        createUser(email, password, name, role, phone, address, setError, setCheck);
    };

    const signUpHandler = (email, password, name, role, phone, address, confirmPassword) => {
        // Validación del campo de número de teléfono
        if (phone === '') {
            setError('El campo Número de teléfono no puede estar vacío');
            return 1;
        }

        if (phone.length !== 9) {
            setError('El campo Número de teléfono debe tener 9 caracteres');
            return 1;
        }
        // Validación del campo de correo
        if (email === '') {
            setError('El campo de Correo Electrónico no puede estar vacío');
            return 1;
        }
        if (!email.includes('@')) {
            setError('Formato de Correo Electronico incorrecto');
            return 1;
        }

        // Validación del campo de contraseña
        if (password === '') {
            setError('El campo de Contraseña no puede estar vacío');
            return 1;
        }
        if (password.trim().length < 6) {
            setError('El campo de Contraseña debe tener al menos 6 caracteres');
            return 1;
        }
        if (confirmPassword === '') {
            setError('El campo Confirmación de contraseña no puede estar vacía');
            return 1;
        }
        if (confirmPassword !== password) {
            setError('Las Contraseñas no coinciden');
            return 1;
        }
        // Si todas las validaciones son exitosas, puedes continuar con el registro
        // handleRegister(email, password, name, role, phone, address)
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.tittle}>Inmunizate 593</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.subTittle}>Create your Account</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre Completo'
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Numero de Telefono'
                    keyboardType='numeric'
                    value={phone}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Direccion'
                    value={address}
                    onChangeText={setAddress}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Correo Electronico'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Clave'
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirmar clave'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <View style={styles.roleContainer}>
                    <View style={styles.roleOptionsContainer}>
                        <Text style={styles.roleLabel}>Rol:</Text>
                        <View style={styles.roleOption}>
                            <RadioButton
                                value="Personal de salud"
                                status={role === 'Personal de salud' ? 'checked' : 'unchecked'}
                                onPress={() => setRole('Personal de salud')}
                                color="#000" // Personaliza el color del botón seleccionado
                            />
                            <Text>Personal de salud</Text>
                        </View>
                        <View style={styles.roleOption}>
                            <RadioButton
                                value="Cuidador"
                                status={role === 'Cuidador' ? 'checked' : 'unchecked'}
                                onPress={() => setRole('Cuidador')}
                                color="#000" // Personaliza el color del botón seleccionado
                            />
                            <Text>Cuidador</Text>
                        </View>
                    </View>
                </View>
                {error !== '' && <Text style={styles.errorText}>{error}</Text>}
                {error === '' && <Text style={styles.checkText}>{check}</Text>}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => handleRegister(email, password, name, role, phone, address, confirmPassword)}
                >
                    <Text
                        style={styles.buttonText}>Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textContainer: {
        alignSelf: 'flex-start',
        marginLeft: 56,
    },
    tittle: {
        fontFamily: 'MontserratBold',
        fontSize: 57,
        color: '#202c94',
        fontWeight: 'bold',
        marginBottom: 35,
        textAlign: 'center',
    },
    subTittle: {
        fontFamily: 'Roboto_Regular',
        fontSize: 18,
        color: 'gray',
        marginTop: 0,
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
    roleContainer: {
        marginTop: 20,
    },
    roleLabel: {
        fontSize: 16,
        marginBottom: 10,
    },
    roleOptionsContainer: {
        flexDirection: 'row',
    },
    roleOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
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
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: 47,
        marginTop: 15,
    },
    checkText: {
        color: '#00B050',
        alignSelf: 'flex-start',
        marginLeft: 47,
        marginTop: 15,
    }
});

export default Register;
