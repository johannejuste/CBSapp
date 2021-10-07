import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signin } from '../store/actions/UserActions' 
import {useDispatch, useSelector } from 'react-redux';
import ChatStackNavigator from './../components/ChatStackNavigator';

const SigninScreen = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSigninUser = () => {
        console.log(email, password);
        dispatch(signin(email, password))
        }

 return (
    <View style={styles.container}>
        <Text>This is the Signin screen</Text>
        <TextInput 
         style={styles.textInput}
         onChangeText={setEmail} // what should happen
         value={email} // the value
         />
         <TextInput 
         style={styles.textInput}
         onChangeText={setPassword} // what should happen
         value={password} // the value
         />
         <Button title="Signup" onPress={() => handleSigninUser()}   /> 
    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },  
    textInput: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
});

export default SigninScreen;