import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/authentication/Profile';
import NewPassword from '../../screens/authentication/NewPassword';
import PasswordResetVerification from '../../screens/authentication/PasswordResetVerification';

const ProfileStack = () => {
  
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfileScreen" component={Profile} options={{title: "Profile"}} />
            <Stack.Screen name="PasswordReset" component={NewPassword} options={{title: "Reset Password"}} />
            <Stack.Screen name="PasswordResetVerification" component={PasswordResetVerification} options={{title: "OTP Verification"}} />
        </Stack.Navigator>
    )
}

export default ProfileStack