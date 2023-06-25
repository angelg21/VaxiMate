import { Text, View, Button } from 'react-native'
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, } from '@react-navigation/drawer'
import VaccinationCalendar from '../screens/VaxiMate/VaccinationCalendar';
import HomePage from '../screens/VaxiMate/HomePage';
import NavImmunization from './NavImmunization';
import Schedule from '../screens/VaxiMate/Schedule';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { isAuthenticated } from '../components/auth/Auth';
import NavChild from './NavChild';
import { useState, useEffect } from 'react';
import { obtenerCredenciales } from '../components/auth/Auth';
import { useFocusEffect } from '@react-navigation/native'
import React from 'react';



const Drawer = createDrawerNavigator();

function NavHome() {
    const iconSizeMultiplier = 1.6;
    const [user, setUser] = useState();
    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_Regular: Roboto_400Regular,
    });

    useEffect(() => {
        obtenerCredenciales()
            .then((data) => setUser(data))
            .catch((error) => console.error(error));
    }, []);


    const CustomDrawerHeader = () => {
        if (!user) {
            return null; // Otra opción: Mostrar un estado de carga mientras se obtienen las credenciales
        }
        return (
            <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                <Ionicons name="person-circle-outline" size={80} color="#888" />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{user.name}</Text>
                <Text style={{ fontSize: 16, color: '#888' }}>{user.email}</Text>
            </View>
        );
    };

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <CustomDrawerHeader />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        );
    };



    return (
        <Drawer.Navigator initialRouteName='ChildAdded'
            screenOptions={{
                headerStyle: { backgroundColor: '#202c94' },
                headerTintColor: 'white',
                drawerActiveBackgroundColor: '#8897d5',
                drawerActiveTintColor: 'black',
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            {/* <Drawer.Screen
                    name='HomePage'
                    component={HomePage}
                    options={{
                        title: 'VaxiMate',
                        drawerLabel: ({ focused, color }) => (
                            <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Home</Text>
                        ),
                        drawerIcon: ({ size }) => (
                            <Ionicons name='home' color={'#202c94'} size={size * iconSizeMultiplier} />
                        ),
                    }}
                /> */}
            <Drawer.Screen
                name='NavChild'
                component={NavChild}
                options={{
                    title: 'Bebes Agregados',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Bebes Agregados</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <MaterialCommunityIcons name='baby-face' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Calendario de Vacunacion'
                component={VaccinationCalendar}
                options={{
                    title: 'Calendar',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Calendario</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name='calendar' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
            <Drawer.Screen
                name='NavImmunization'
                component={NavImmunization}
                options={{
                    title: 'Articulos de Inmunizacion',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Articulos de Inmunizacion</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name='newspaper' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
            {/* <Drawer.Screen
                name='Schedule'
                component={Schedule}
                options={{
                    title: 'Esquema de Vacunacion',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Esquema de Vacunacion</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <AntDesign name='earth' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            /> */}
        </Drawer.Navigator>
    );
}

export default NavHome