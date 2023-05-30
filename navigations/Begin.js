import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/Intro';
import Login from '../screens/Auth/Login';
import HomePage from '../screens/HomePage';


const Stack = createNativeStackNavigator();

function Begin() {
    return (
        <Stack.Navigator initialRouteName='Intro'>
            <Stack.Screen
                name='Home'
                component={HomePage}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default Begin;