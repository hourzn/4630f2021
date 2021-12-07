import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CurrentScreen = ({ navigation }) => {
    const handleAdd = () => {
        navigation.navigate('Add');
    };
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <View>
                    <Text style={styles.image}>Image Here</Text>
                </View>
                <Text style={styles.sold}>Current</Text>
            </View>

            <View style={styles.border}>
                <Text style={styles.sold}>Current</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.sold}>Current</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.sold}>Current</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.sold}>Current</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.sold}>Current</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.sold}>Current</Text>
            </View>
            <Ionicons name='add-circle' size={32} color='white' onPress={handleAdd} style={styles.back} />
        </View>
    );
};

export default CurrentScreen;

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
    sold: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 170,
        paddingRight: 170,
        backgroundColor: '#999999',
    },
    border: {
        borderBottomColor: '#202020',
        borderBottomWidth: 1,
    },
    image: {
        left: 50,
        color: 'red',
        position: 'absolute',
    },
    back: {
        bottom: 10,
        right: 20,
        fontSize: 50,
        position: 'absolute',
        color: 'darkslategrey',
    },
});
