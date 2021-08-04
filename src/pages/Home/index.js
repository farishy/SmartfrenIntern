import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

    const [user, setUser] = useState([]);

    const getUserData = () =>{
        const value =  AsyncStorage.getItem('user').then((info)=>{
          setUser(JSON.parse(info))
        })
    }

    useEffect(() => {
        getUserData()
        // return () => {
        //     cleanup
        // }
    }, [navigation, user])

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor='transparent'/>
            <ScrollView>
                <Text style={{fontSize:15, paddingHorizontal:20, paddingTop:20, fontWeight:'bold'}}>Your data</Text>
                <Text style={{fontSize:15, paddingHorizontal:20, marginTop:10,}}>Identity Number: {user.identityNo}</Text>
                <Text style={{fontSize:15, paddingHorizontal:20, }}>Name: {user.name}</Text>
                <Text style={{fontSize:15, paddingHorizontal:20, }}>Date of Birth: {user.dob}</Text>
                <Text style={{fontSize:15, paddingHorizontal:20, }}>Age: {user.age}</Text>
                <Text style={{fontSize:15, paddingHorizontal:20, }}>Status: {user.status}</Text>
                

            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
