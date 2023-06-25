import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { DataVacunas } from './DataVacunas'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Article = ({ route }) => {
    const { id } = route.params;
    const info = DataVacunas[id];
    const containerColors = ["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8"];
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_Regular: Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleToForms = () => {
        navigation.navigate('Immunization')

    }
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.submitButton} onPress={handleToForms}>
                <Ionicons name="arrow-back" style={styles.submitIcon} />
            </TouchableOpacity>
            <View style={styles.book}>
                <ScrollView style={[styles.scroll, { backgroundColor: containerColors[id % containerColors.length] }]}>

                    <Text style={styles.heading}>Detalles de la Vacuna</Text>
                    <View style={styles.separator} />
                    <Text style={styles.title}>{info.nombre}</Text>
                    <Text style={styles.paragraph}>{info.intro}</Text>
                    <Text style={styles.paragraph}><Text style={styles.subtitle}>Dosis: </Text> {info.dosis}</Text>
                    <Text style={styles.paragraph}><Text style={styles.subtitle}>Eficiencia: </Text>{info.eficacia}</Text>
                    <Text style={styles.paragraph}><Text style={styles.subtitle}>Efectos: </Text>{info.efectos}</Text>
                    <Text style={styles.paragraph}><Text style={styles.subtitle}>Simultaneo: </Text>{info.simultaneo}</Text>
                    <Text style={styles.paragraph}><Text style={styles.subtitle}>Historia: </Text>{info.historia}</Text>
                </ScrollView>
            </View>
        </View>




    );
};




const styles = {
    book: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#CCCCCC',
    },
    title: {
        fontFamily: 'Roboto_Regular',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'Roboto_Regular',
        fontSize: 18,
        marginBottom: 10,
    },
    heading: {
        fontSize: 28,
        textAlign: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#000',
        marginVertical: 10,
    },
    paragraph: {
        fontFamily: 'Roboto_Regular',
        marginBottom: 10,
        marginLeft: 12,
        marginRight: 12,
        textAlign: 'justify',
    },
    scroll: {
        borderWidth: 0.5,
        marginBottom: 10,
    },
    submitButton: {
        marginLeft: 15,
        width: 50,
        height: 50,
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
    container: {
        flex: 1,
        position: 'relative',
    },
};

export default Article;
