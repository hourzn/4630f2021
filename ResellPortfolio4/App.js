import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen';
import SettingsScreen from './screens/SettingScreen';
import NetScreen from './screens/NetScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const home = 'Home'
const inventory = 'Inventory'
const net = 'Net'
const settings = 'Settings'
export default function App() {
    const [isSignedIn,setSignIn] = useState(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setSignIn(true)
            }
            else{
                setSignIn(false) 
                }
        });
    }, []);
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setSignIn(true)
    //         }
    //         else{setSignIn(false)}
    //     });

    //     return unsubscribe;
    // }, []);

    if (isSignedIn == true)
    {
        return (
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName={home}
                screenOptions={({route})=>({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let routename = route.name
    
                        if (routename == home) {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (routename == inventory)
                        {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (routename == net)
                        {
                            iconName = focused ? 'list' : 'list-outline'
                        }
                        else if (routename == settings)
                        {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                >
                    <Tab.Screen name ={home} component={HomeScreen}/>
                    <Tab.Screen name ={inventory} component={InventoryScreen}/>
                    <Tab.Screen name ={net} component={NetScreen}/>
                    <Tab.Screen name ={settings} component={SettingsScreen}/>
    
                </Tab.Navigator>
            </NavigationContainer>)
    }
    else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
                    <Stack.Screen name='Home' component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
