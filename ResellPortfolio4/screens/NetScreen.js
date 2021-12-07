import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

<<<<<<< HEAD
const NetScreen = ({ navigation }) => {
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {})
            .catch((error) => alert(error.message));
    };
    const Test = () => {
        navigation.navigate('home');
    };
    return (
        <View style={styles.container}>
            <Text>Net</Text>
=======
const NetScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace('Login');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <Text>Net</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
        </View>
    );
};

export default NetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
<<<<<<< HEAD
        backgroundColor: '#171717',
=======
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});
