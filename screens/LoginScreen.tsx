import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle login:
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Dashboard');
            })
            .catch((error) => setErrorMessage(error.message));
    };

    // Function to handle sign up:
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Dashboard');
            })
            .catch((error) => setErrorMessage(error.message));
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
}
