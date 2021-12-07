import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../firebase';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {
<<<<<<< HEAD
        // auth.createUserWithEmailAndPassword(email, password)
        //     .then((userCredentials) => {
        //         const user = userCredentials.user;
        //         console.log('Registered with:', user.email);
        //     })
        //     .catch((error) => alert(error.message));
        navigation.replace('SignUp');
=======
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch((error) => alert(error.message));
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
    };

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.title}>Resell Portfolio</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
<<<<<<< HEAD
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
=======
                <TouchableOpacity  onPress={handleLogin} style={styles.button}>                  
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'gray',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'black',
        width: 250,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'black',
        marginTop: 5,
        borderColor: '#faf0e6',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 5,
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 031841851f8bc90d23a2c9dcd46d3f9e30eb7544
});
