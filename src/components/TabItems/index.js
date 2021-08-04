import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { IconHome, IconHomeActive, IconRegistration, IconRegistrationActive,IconHomeImage, IconRegistrationImage } from '../../assets'

const TabItems = ({isFocused, onLongPress, onPress, label}) => {

    const Icon = () =>{
        if(label === 'Home' ) return isFocused ? <IconHomeActive/> : <Image source={IconHomeImage}/>
        if(label === 'Registration' ) return isFocused ? <IconRegistrationActive/> : <Image source={IconRegistrationImage}/>
        return <IconHomeImage />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            style={styles.container}
            >
            <Icon />
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text: (isFocused, label) => ({
        fontSize:15,
        color: isFocused ? 'black' : 'gray'
    })

})
