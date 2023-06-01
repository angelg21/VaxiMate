import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import Begin from './navigations/Begin';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Begin />
    </NavigationContainer>
  );
}
