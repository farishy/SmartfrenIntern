import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home, Registration, Splash,
} from '../../pages'
import { BottomTabs } from '../../components';
  
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: true}}/>
            <Tab.Screen name="Registration" component={Registration} options={{headerShown: true}}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
