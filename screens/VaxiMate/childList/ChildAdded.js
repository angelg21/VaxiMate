import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function ChildAdded() {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('FormsChild1');
    };

    return (
        <View>
            <Text>Esta es la pagina Child Added</Text>
            <Button title="Go to Other Page" onPress={handleButtonPress} />
        </View>
    );
}

export default ChildAdded