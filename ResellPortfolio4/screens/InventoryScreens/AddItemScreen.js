import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Picker } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const AddItemScreen = ({ navigation }) => {
    // const navigation = useNavigation();
    const [itemname, setItemname] = useState('');
    const [price, setPrice] = useState('');
    const [website, setWebsite] = useState('');

    const handleAdd = () => {
        // post item data to database
        Alert.alert('Success', 'Item Added', [{ text: 'Got it', onPress: () => console.log('Got it Pressed') }]);
    };
    const handleBack = () => {
        navigation.navigate('Current');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Ionicons name='arrow-back' size={32} color='white' onPress={handleBack} style={styles.back} />

            <Text style={styles.title}>Add Item</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Item Name'
                    value={itemname}
                    onChangeText={(text) => setItemname(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Price'
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Website'
                    value={website}
                    onChangeText={(text) => setWebsite(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleAdd} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default AddItemScreen;

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
