import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import DatePicker from '../../../components/DatePicker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

function FormsChild2() {

    const navigation = useNavigation();
    const handleToForms1 = () => {
        navigation.navigate('FormsChild1');
    };
    const handleToForms3 = () => {
        navigation.navigate('FormsChild3');
    };
    const currentDate = new Date().toISOString().split('T')[0];
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
            <Text style={styles.text}>Selecciona la Fecha de Nacimiento</Text>
            <View style={styles.box}>
                <Image
                    source={require('../../../assets/nacimiento.png')}
                    style={styles.image}
                />
                <DatePicker
                    defaultDate={'1994-01-12'}
                    onDateChange={(value) => console.log(value)}
                />
            </View>
            <View style={styles.toachables}>
                <TouchableOpacity style={styles.submitButton} onPress={handleToForms1}>
                    <Ionicons name="arrow-back" style={styles.submitIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={handleToForms3}>
                    <Ionicons name="arrow-forward" style={styles.submitIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FormsChild2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    barraContainer: {
        flexDirection: 'row',
        height: 37,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10, // Esquinas redondeadas
        overflow: 'hidden', // Para recortar el contenido dentro de los bordes redondeados
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
        backgroundColor: '#3c47a6',
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
        height: '100%',
        backgroundColor: 'white',
        left: '99%',
    },
    text: {
        fontFamily: 'MontserratBold',
        color: '#3c47a6',
        fontSize: 18,
        marginTop: 50,
        textAlign: 'center',
    },
    box: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
    submitIcon: {
        color: 'white',
        fontSize: 24,
    },
    toachables: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
    },
});