import { Text, View, Button } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Calendar from '../screens/VaxiMate/Calendar';
import ChildList from '../screens/VaxiMate/ChildList';
import HomePage from '../screens/VaxiMate/HomePage';
import Immunization from '../screens/VaxiMate/Immunization';
import Schedule from '../screens/VaxiMate/Schedule';


const Drawer = createDrawerNavigator();

function NavHome() {

    return (
            <Drawer.Navigator initialRouteName='HomePage'>
                <Drawer.Screen name='HomePage' component={HomePage} />
                <Drawer.Screen name='ChildList' component={ChildList} />
                <Drawer.Screen name='Calendar' component={Calendar} />
                <Drawer.Screen name='Immunization' component={Immunization} />
                <Drawer.Screen name='Schedule' component={Schedule} />
            </Drawer.Navigator>
    );
}

export default NavHome