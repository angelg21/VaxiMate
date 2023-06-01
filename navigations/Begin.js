import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/Intro';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import NavHome from './NavHome';


const Stack = createNativeStackNavigator();

function Begin() {
    return (
        <Stack.Navigator initialRouteName='Intro'>
            <Stack.Screen
                name='NavHome'
                component={NavHome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Intro'
                component={Intro}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    title: '',
                    headerTitleAlign: 'left',
                }}
            />
            <Stack.Screen
                name='Register'
                component={Register}
                options={{
                    title: '',
                    headerTitleAlign: 'left',
                }}
            />
        </Stack.Navigator>
    )
}

export default Begin;