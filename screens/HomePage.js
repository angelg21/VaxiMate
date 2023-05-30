import { Text, View, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import UserScreen from './UserScreen';
import RegisterScreen from './RegisterScreen';


const Drawer = createDrawerNavigator();

function HomePage() {

    return (
            <Drawer.Navigator initialRouteName='UserScreen'>
                <Drawer.Screen name='UserScreen' component={UserScreen} />
                <Drawer.Screen name='RegisterScreen' component={RegisterScreen} />
            </Drawer.Navigator>
    );
}

export default HomePage