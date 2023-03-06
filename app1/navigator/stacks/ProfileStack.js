import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LevelOneQuestion from '../../screens/LevelOneQuestion';
import LevelOneAnswer from '../../screens/LevelOneAnswer';
import Contact from '../../screens/Contact';
import WinSuccess from '../../screens/WinSuccess';
import ThankYou from '../../screens/ThankYou';
import Profile from '../../screens/authentication/Profile';

const ProfileStack = () => {
  
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfileScreen" component={Profile} options={{title: "Profile"}} />
        </Stack.Navigator>
    )
}

export default ProfileStack