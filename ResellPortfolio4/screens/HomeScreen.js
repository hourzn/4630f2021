import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

const HomeScreen = () => {
<<<<<<< HEAD
    return (
        <View style={styles.container}>
            <Text style={styles.standardcontainer}>Welcome Back {auth.currentUser?.email}</Text>
            <View>
                <Text style={styles.profit}>Overall Standing</Text>
            </View>
            <View>
                <Text style={styles.profit}>Inventory Count</Text>
            </View>
            <View>
                <Text style={styles.profit}>Chart Here</Text>
            </View>
=======
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
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
        </View>
    );
};

export default HomeScreen;

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
<<<<<<< HEAD
    standardcontainer: {
        top: 50,
        color: 'white',
        position: 'absolute',
        marginBottom: 200,
    },
    profit: {
        color: 'white',
        paddingTop: 75,
        paddingBottom: 75,
        paddingLeft: 150,
        paddingRight: 150,
        position: 'relative',
        marginBottom: 10,
        marginTop: 40,
        backgroundColor: '#202020',
    },
=======
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
});
