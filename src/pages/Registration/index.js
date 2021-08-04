import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button, Alert } from 'react-native'
import {useForm} from '../../utils';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from '@react-native-community/checkbox';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = ({navigation}) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const now = new Date()

    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);



    const getAge  = (date) =>{
        const year = date.getFullYear()
        ageUser = now - year
        form.age = ageUser
    }

    const handleConfirm = (date) => {
        hideDatePicker();
        const current = new Date().getFullYear
        const day   = date.getDate();
        const month = date.getMonth()+1;
        const year  = date.getFullYear();
        //set(day+'/'+month+'/'+year)
        setForm('dob', year+'-'+month+'-'+day)

    };

    const [yesChecked, setYesChecked] = useState(true);
    const [noChecked, setNoChecked] = useState(false);
    const marriedChecked = () =>{
        if(yesChecked){
        form.status = 'Married'
        }else{
        form.status = 'Not Married'
        }
  }

    const onContinue = () => {
        console.log(form)
        if(form.identityNoCheck == '' && form.nameCheck == '' && form.dobCheck == '' ){
            AsyncStorage.setItem('user', JSON.stringify(form));
            alert("Success");
        }else{
            alert("Error")
        }
    }

    useEffect(() => {
        marriedChecked()
        console.log(form)
        // return () => {
        //     marriedChecked
        // }
    }, [form, marriedChecked])

    const [form, setForm] = useForm({
        identityNo: '',
        identityNoCheck: '',
        name: '',
        nameCheck: '',
        dob: '',
        dobCheck: '',
        status: '',
        age: '',

    })

    const nameValidation = () => {
        if (form.name.length < 1) {
            setForm('nameCheck','*cannot be null')
        }
        else if(form.nameCheck.length >0){
            setForm('nameCheck','')
        }
    }

    const identityNoValidation = () => {
        const regexNik = new RegExp(/^((1[1-9])|(21)|([37][1-6])|(5[1-4])|(6[1-5])|([8-9][1-2]))[0-9]{2}[0-9]{2}(([0-6][0-9])|(7[0-1]))((0[1-9])|(1[0-2]))([0-9]{2})[0-9]{4}$/g)
        if (form.identityNo.length < 1) {
            setForm('identityNoCheck','*cannot be null')
          }else if(form.identityNo.length != 16){
              setForm('identityNoCheck','*identity number is not valid')
          }else if(regexNik.test(form.identityNo) === false){
            setForm('identityNoCheck','*identity number is not valid')
          }
          else if(form.identityNoCheck.length >0){
            setForm('identityNoCheck','')
          }
    }

    const dobValidation = () => {
        if (form.dob.length < 1) {
            setForm('dobCheck','*Tolong pilih tanggal lahir')
        }
        else if(form.dobCheck.length >0){
            setForm('dobCheck','')
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.label}>Identity No</Text>
            <TextInput
                onChangeText={value => setForm('identityNo', value)}
                value={form.identityNo}
                placeholder="Enter Your Identity Number"
                style={styles.inputText}
                onEndEditing={identityNoValidation}
                placeholderTextColor="gray"

            />
            <Text style={{color:'red', fontSize:13, marginLeft:5, marginTop:0, marginBottom:10,}}>{form.identityNoCheck}</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
                onChangeText={value => setForm('name', value)}
                value={form.name}
                placeholder="Enter Your Name"
                style={styles.inputText}
                onEndEditing={nameValidation}
                placeholderTextColor="gray"

            />
            <Text style={{color:'red', fontSize:13, marginLeft:5, marginTop:0, marginBottom:10,}}>{form.nameCheck}</Text>
            <View style={{width:'50%', marginRight:5,}}>
                <Text style={styles.label}>Date of Birth</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.calender} onPress={showDatePicker}>
                        {/* <Image source={require('../../assets/calendar.png')} style={{width:20, height:20,}} /> */}
                        <Text>Click Here to choose the date</Text>
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={value => setForm('dob', value)}
                        value={form.dob}
                        placeholder="yyyy-mm-dd"
                        style={[styles.inputText]}
                        editable={false}
                        onEndEditing={dobValidation}
                        placeholderTextColor="gray"
                    />
                    
                </View>
            </View>
            <Text style={{color:'red', fontSize:13, marginLeft:5, marginTop:0, marginBottom:10,}}>{form.dobCheck}</Text>
            <Text style={styles.label}>Age</Text>
            <TextInput
                onChangeText={value => setForm('age', value)}
                value={form.age}
                placeholder="Enter your ages"
                style={styles.inputText}
                placeholderTextColor="gray"

            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={now}
            />
            <Text style={[styles.label, {marginTop:20,}]}>Married</Text>
            <View style={{flexDirection:'row', width:'100%', marginTop:0, marginBottom:20,}}>
                <CheckBox value={yesChecked} onValueChange={(noChecked) => [setYesChecked(noChecked), setNoChecked(yesChecked)]} /><Text style={[styles.label, {marginTop:8, fontWeight:'normal', marginRight:20,}]}>Yes</Text>
                <CheckBox value={noChecked} onValueChange={(yesChecked) => [setNoChecked(yesChecked), setYesChecked(noChecked)]} /><Text style={[styles.label, {marginTop:8, fontWeight:'normal'}]}>No</Text>
            </View>
            <Button
            title="Register"
            color='#F05454'
            onPress={onContinue}
        />
            </ScrollView>
            <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Terjadi Kesalahan"
            message="Tolong cek kembali data yang anda masukkan."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            onConfirmPressed={()=>
                setShowAlert(false)
            }
            />
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
    },
    inputText:{
        borderBottomWidth: 1,
        borderColor: '#F3F3F3',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        alignSelf:'center',
        width:'100%',
        backgroundColor:'white',
        fontSize:15,
        color:'black',
        paddingHorizontal:10,
        

    },
    label:{
        marginLeft:5, fontWeight:'bold', fontSize:15,
        marginBottom:10,
    },
    calender:{
        paddingVertical:6.5,
        paddingHorizontal:13,
        backgroundColor: '#F8F8F8',
        alignSelf: 'flex-start',
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 7,
        }
    },
})
