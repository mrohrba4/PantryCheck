import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
    return (
        <View>
            <Text>Dashboard Screen</Text>
            <Button title="Add Item" onPress={() => navigation.navigate('Add Item')} />
        </View>
    );
}