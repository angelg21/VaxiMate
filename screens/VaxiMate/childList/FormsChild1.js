import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const FormsChild1 = ({route}) => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    
    const handleToForms2 = () => {
        const page1Data = { name, country, email, phone } 
        navigation.navigate('FormsChild2', { page1Data }); 
    };
    return (
        <View style={styles.container}>
            <View style={styles.barraContainer}>
                <TouchableOpacity style={styles.primerParte}>
                    <View style={styles.lineaVertical} />
                    <MaterialCommunityIcons name='baby-face' style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.segundaParte}>
                    <View style={styles.lineaVertical} />
                    <FontAwesome name="birthday-cake" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tercerParte}>
                    <FontAwesome name="intersex" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.formularioContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.square}>
                        <FontAwesome name="user" style={styles.inputsIcon} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.square}>
                        <FontAwesome name="globe" style={styles.inputsIcon} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Provincia"
                        value={country}
                        onChangeText={setCountry}
                    />
                </View>
                <Text style={styles.text}>Datos del representante para recodatorios
                </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.square}>
                        <FontAwesome name="envelope" style={styles.inputsIcon} />
                    </View>
                    <TextInput  
                        style={styles.input}
                        placeholder="Correo"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.square}>
                        <FontAwesome name="mobile" style={styles.inputsIcon} />
                    </View>
                    <TextInput
                        style={[styles.input]}
                        placeholder="Código"
                        value='+593'
                        editable={false}
                    />
                    <TextInput
                        style={[styles.halfInput]}
                        placeholder="Número de Teléfono"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleToForms2}>
                    <Ionicons name="arrow-forward" style={styles.submitIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default FormsChild1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    barraContainer: {
        flexDirection: 'row',
        height: 38,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10, // Esquinas redondeadas
        overflow: 'hidden', // Para recortar el contenido dentro de los bordes redondeados
    },
    primerParte: {
        flex: 1,
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    segundaParte: {
        flex: 1,
        backgroundColor: '#9E9E9E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tercerParte: {
        flex: 1,
        backgroundColor: '#9E9E9E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        fontSize: 24,
    },
    lineaVertical: {
        position: 'absolute',
        width: 2,
        height: '100%', // Ajusta la altura de las líneas verticales según tus necesidades
        backgroundColor: 'white',
        left: '99%',
    },
    formularioContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    circle: {
        width: 105,
        height: 105,
        borderRadius: 60,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 17,
    },
    cameraIcon: {
        color: 'white',
        fontSize: 48,
        marginBottom: 10,
    },
    cameraText: {
        color: 'white',
        fontSize: 16,
    },
    inputContainer: {
        marginBottom: 20,
    },
    submitButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    submitIcon: {
        color: 'white',
        fontSize: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    square: {
        width: 50,
        height: 50,
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsIcon: {
        color: 'white',
        fontSize: 20,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        paddingLeft: 10,
        marginRight: 5,
    },
    halfSquare: {
        width: '25%',
    },
    halfInput: {
        width: '62%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        paddingLeft: 10,
    },
    text: {
        fontFamily: 'MontserratBold',
        color: '#3c47a6',
        fontSize: 18,
        marginTop: 5,
        marginBottom:18,
        textAlign: 'center',
    },
});

