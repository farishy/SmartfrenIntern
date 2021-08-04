import React, {useEffect} from 'react'
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native'
import { Smartfren } from '../../assets'



const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
          }, 3000);
          return () => navigation.replace('MainApp');
    }, [navigation])

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor='transparent'/>
            <View style={styles.splashLayout}>
                <Image style={styles.imageSplash} source={Smartfren} />
                <Text style={styles.textSplash}>Simple App Registration by Muhammad Faris</Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    splashLayout: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        padding:0,        
    },
    imageSplash: {
        width:'100%',
        height:60,
        alignSelf:'center',
    },
    textSplash: {
        width:'100%',
        textAlign:'center'
    },
})
