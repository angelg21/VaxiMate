import { View, Text, StyleSheet, Button } from 'react-native';

function Intro({navigation}) {
    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the most <Text style={styles.highlight}>"User"</Text> screen!
            </Text>
            <Button
                title= "Go to Home Page"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default Intro;

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
