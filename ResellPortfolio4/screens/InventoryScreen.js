import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PendingScreen from './InventoryScreens/PendingScreen';
import SoldScreen from './InventoryScreens/SoldScreen';
import CurrentScreen from './InventoryScreens/CurrentScreen';
import AddItemScreen from './InventoryScreens/AddItemScreen';

const Tab = createMaterialTopTabNavigator();
const current = 'Current';
const pending = 'Pending';
const sold = 'Sold';
const add = 'Add';
const InventoryScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName={current}
            screenOptions={() => ({
                tabBarIcon: () => {
                    return <Text> </Text>;
                },
            })}
        >
            <Tab.Screen options={{ headerShown: false }} name={current} component={CurrentScreen} />
            <Tab.Screen options={{ headerShown: false }} name={pending} component={PendingScreen} />
            <Tab.Screen options={{ headerShown: false }} name={sold} component={SoldScreen} />
            <Tab.Screen options={{ headerShown: false }} name={add} component={AddItemScreen} />
        </Tab.Navigator>
    );
};

export default InventoryScreen;

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
});
