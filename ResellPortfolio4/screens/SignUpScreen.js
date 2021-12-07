import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../firebase';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
    // const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch((error) => alert(error.message));
        Alert.alert('Successfully signed up!', 'Logging in...', [
            { text: 'Got it', onPress: () => console.log('Got it Pressed') },
        ]);
    };
    const handleBack = () => {
        navigation.navigate('Login');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Ionicons name='arrow-back' size={32} color='white' onPress={handleBack} style={styles.back} />

            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Full Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                />
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
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
    },
    inputContainer: {
        width: '80%',
        marginTop: 10,
    },
    input: {
        backgroundColor: 'gray',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
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
    },
    back: {
        top: 50,
        left: 20,
        position: 'absolute',
    },
});
