import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Feather } from '@expo/vector-icons';
import { createBaby } from '../../../components/auth/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FormsChild3({ route }) {
    const { formData } = route.params;
    const [selectedGender, setSelectedGender] = useState(null);
    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };
    const navigation = useNavigation();

    const handleToForms2 = () => {
        navigation.navigate('FormsChild2');
    };

    const handleToForms = async () => {
        const page3Data = { selectedGender };
        const finalFormData = { ...formData, ...page3Data };

        try {
            createBaby(finalFormData)
            navigation.navigate('ChildAdded');
                
        } catch (error) {
            console.log(error)
        }
    };


    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.barraContainer}>
                <TouchableOpacity style={styles.primerParte}>
                    <View style={styles.lineaVertical} />
                    <MaterialCommunityIcons name='baby-face' style={styles.iconBarra} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.segundaParte}>
                    <View style={styles.lineaVertical} />
                    <FontAwesome name="birthday-cake" style={styles.iconBarra} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tercerParte}>
                    <FontAwesome name="intersex" style={styles.iconBarra} />
                </TouchableOpacity>
            </View>
            <View style={[styles.circle, (selectedGender === 'male' && styles.selectedMale) || (selectedGender === 'female' && styles.selectedFemale)]}>
                {selectedGender === 'male' ? (
                    <Image
                        source={require('../../../assets/gatearNiño.png')}
                        style={styles.image}
                    />
                ) : selectedGender === 'female' ? (
                    <Image
                        source={require('../../../assets/gatearNiña.png')}
                        style={styles.image}
                    />
                ) : null}
            </View>
            <Text style={styles.text}>Selecciona el Genero</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsContainerColumn}>
                    <TouchableOpacity onPress={() => handleGenderSelection('male')} style={[styles.button, selectedGender === 'male' && styles.selectedButtonMale]}>
                        <FontAwesome name="mars" style={styles.buttonText} />
                    </TouchableOpacity>
                    <Text style={styles.genderText}>Niño</Text>
                </View>
                <View style={styles.buttonsContainerColumn}>
                    <TouchableOpacity onPress={() => handleGenderSelection('female')} style={[styles.button, selectedGender === 'female' && styles.selectedButtonFemale]}>
                        <FontAwesome name="venus" style={styles.buttonText} />
                    </TouchableOpacity>
                    <Text style={styles.genderText}>Niña</Text>
                </View>
            </View>
            <View style={styles.toachable}>
                {/* <TouchableOpacity style={styles.submitButton} onPress={handleToForms2}>
                    <Ionicons name="arrow-back" style={styles.submitIcon} />
                </TouchableOpacity> */}
                {selectedGender === 'male' || selectedGender === 'female' ? (
                    <TouchableOpacity style={styles.submitButtonCheck} onPress={handleToForms}>
                        <Feather name="check" style={styles.submitIcon} />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}

export default FormsChild3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    genderText: {
        fontSize: 16,
        marginTop: 8,
        color: '#000',
    },
    primerParte: {
        flex: 1,
        backgroundColor: '#9E9E9E',
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
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBarra: {
        color: 'white',
        fontSize: 24,
    },
    lineaVertical: {
        position: 'absolute',
        width: 2,
        height: '100%',
        backgroundColor: 'white',
        left: '99%',
    },
    circle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#c7c7c7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
    selectedMale: {
        backgroundColor: '#8AB6F7',
        borderWidth: 2,
        borderColor: 'black',
    },
    selectedFemale: {
        backgroundColor: '#FFD9E5',
        borderWidth: 2,
        borderColor: 'black',
    },
    text: {
        fontFamily: 'MontserratBold',
        color: '#3c47a6',
        fontSize: 18,
        marginTop: 25,
        textAlign: 'center',
    },
    buttonsContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsContainerColumn: {
        marginTop: 50,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#9E9E9E',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 28,
    },
    selectedButtonMale: {
        backgroundColor: '#6495ED',
    },
    selectedButtonFemale: {
        backgroundColor: 'pink',
    },
    icon: {
        fontSize: 32,
        color: 'white',
    },
    toachable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    submitButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3c47a6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        padding: 10,
        marginHorizontal: 10,
    },
    submitButtonCheck: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        padding: 10,
        marginHorizontal: 10,
    },
    submitIcon: {
        color: 'white',
        fontSize: 24,
    },
});