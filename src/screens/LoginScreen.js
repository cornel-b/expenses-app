import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import styled from 'styled-components/native';

class LoginScreen extends Component {

    state = { email: '', password: '' }

    render() {

        return (
            <View style={{ flex:1, marginTop: 50 }}>
                <FormLabel>Email Address</FormLabel>
                <FormInput
                    value={this.state.email}
                    onChangeText={ (email) => this.setState({ email }) }
                />
                <FormValidationMessage></FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={ (password) => this.setState({ password }) }
                />
                <FormValidationMessage></FormValidationMessage>
        
                <Button
                    raised
                    icon={{ name: 'power' }}
                    title="SIGN IN"
                    color="#fff"
                    backgroundColor="#009688"
                    onPress={ () => console.log(`values are ${this.state.email} and ${this.state.password}`) }
                />
                
            </View>
        );
    }

}

export default LoginScreen;