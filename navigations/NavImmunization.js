import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Immunization from '../screens/VaxiMate/Immunization';
import Article from '../components/Article';

const Stack = createNativeStackNavigator();

function NavImmunization() {
    return (
        <Stack.Navigator initialRouteName='Immunization'>
            <Stack.Screen
                name='Immunization'
                component={Immunization}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Article'
                component={Article}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default NavImmunization;