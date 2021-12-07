import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

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
            <Text style={styles.WIP}>Net Work in Progress</Text>
        </View>
    );
};

export default NetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
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
    WIP: {
        color: 'white',
    },
});
