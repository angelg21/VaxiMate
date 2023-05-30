import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import UserScreen from './screens/UserScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Begin from './navigations/Begin';
import HomePage from './screens/HomePage';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    // <View>
    //   <Begin />
    // </View>
    //     <View style={styles.rootContainer}>
    //     <Text>
    //         This is the most <Text style={styles.highlight}>"User"</Text> screen!
    //     </Text>
    // </View>
    <NavigationContainer>
      <Begin />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});