import { Text, View, Button } from 'react-native'
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, } from '@react-navigation/drawer'
import Calendar from '../screens/VaxiMate/Calendar';
import HomePage from '../screens/VaxiMate/HomePage';
import Immunization from '../screens/VaxiMate/Immunization';
import Schedule from '../screens/VaxiMate/Schedule';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import NavChild from './NavChild';

const Drawer = createDrawerNavigator();

function NavHome() {
    const iconSizeMultiplier = 1.6;
    const [fontsLoaded] = useFonts({
        MontserratBold: Montserrat_700Bold,
        Roboto_Regular: Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const CustomDrawerHeader = ({ name, email }) => {
        return (
            <View style={{ alignItems: 'center', paddingVertical: 10}}>
                <Ionicons name="person-circle-outline" size={80} color="#888" />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{name}</Text>
                <Text style={{ fontSize: 16, color: '#888' }}>{email}</Text>
            </View>
        );
    };

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <CustomDrawerHeader name="John Doe" email="johndoe@example.com" />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        );
    };

    return (
        <Drawer.Navigator initialRouteName='HomePage'
            screenOptions={{
                headerStyle: { backgroundColor: '#202c94' },
                headerTintColor: 'white',
                drawerActiveBackgroundColor: '#8897d5',
                drawerActiveTintColor: 'black',
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
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
            />
            <Drawer.Screen
                name='NavChild'
                component={NavChild}
                options={{
                    title: 'Child Added',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Child List</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <MaterialCommunityIcons name='baby-face' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Calendar'
                component={Calendar}
                options={{
                    title: 'Calendar',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Calendar View</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name='calendar' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Immunization'
                component={Immunization}
                options={{
                    title: 'Immunization Article',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Immunization Article</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name='newspaper' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Schedule'
                component={Schedule}
                options={{
                    title: 'Country Schedule',
                    drawerLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: focused ? 19 : 17, fontFamily: 'Roboto_Regular', color }}>Country Schedule</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <AntDesign name='earth' color={'#202c94'} size={size * iconSizeMultiplier} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default NavHome