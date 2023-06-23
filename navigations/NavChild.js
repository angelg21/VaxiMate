import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildAdded from '../screens/VaxiMate/childList/ChildAdded';
import FormsChild1 from '../screens/VaxiMate/childList/FormsChild1';
import FormsChild2 from '../screens/VaxiMate/childList/FormsChild2';
import FormsChild3 from '../screens/VaxiMate/childList/FormsChild3';
import BabySchedule from '../screens/VaxiMate/childList/BabySchedule';
import PruebaBaby from '../screens/VaxiMate/childList/PruebaBaby';

const Stack = createNativeStackNavigator();

function NavChild() {
    return (
        <Stack.Navigator initialRouteName='ChildAdded'>
            <Stack.Screen
                name='ChildAdded'
                component={ChildAdded}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='FormsChild1'
                component={FormsChild1}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='FormsChild2'
                component={FormsChild2}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='FormsChild3'
                component={FormsChild3}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='BabySchedule'
                component={BabySchedule}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='PruebaBaby'
                component={PruebaBaby}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default NavChild;