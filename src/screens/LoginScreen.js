import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import styled from 'styled-components/native';

class LoginScreen extends Component {

    render() {

        return (
            <View style={{ flex:1, marginTop: 50 }}>
                <FormLabel>Email Address</FormLabel>
                <FormInput onChangeText={ () => {} }/>
                <FormValidationMessage></FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={ () => {} }/>
                <FormValidationMessage></FormValidationMessage>
        
                <Button
                    raised
                    icon={{ name: 'power' }}
                    title="SIGN IN"
                    color="#fff"
                    backgroundColor="#009688"
                />
                
            </View>
        );
    }

}

export default LoginScreen;