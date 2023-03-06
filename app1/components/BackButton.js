import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({color}) => {
    const navigation = useNavigation()
    
    return (
        <Ionicons name="arrow-back-outline" size={24} color={color ? color : "white"} onPress={() => navigation.goBack()}/>
    )
}

export default BackButton