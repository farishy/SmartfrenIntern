import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './config/router'

const App = () => {
  return (
    <NavigationContainer>
       <Routes />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
