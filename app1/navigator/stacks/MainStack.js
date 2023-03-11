import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Main from '../../screens/authentication/Main';
import Login from '../../screens/authentication/Login';
import Registration from '../../screens/authentication/Registration';
import OTPVerification from '../../screens/authentication/OTPVerification';
import ResetPassword from '../../screens/authentication/ResetPassword';
import ResetVariffcation from '../../screens/authentication/ResetVerification';
import NewPassword from '../../screens/authentication/NewPassword';
import Splash from '../../screens/Splash';
import Splash1 from '../../screens/Splash1';
import Splash2 from '../../screens/Splash2';
import Profile from '../../screens/authentication/Profile';
import ResetVerification from '../../screens/authentication/ResetVerification';
import PasswordChange from '../../screens/authentication/PasswordChange';
const MainStack = () => {
  
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#DCFFE0',
                },
                headerTintColor: 'black',
                headerTitleAlign: "center",
                headerTitleStyle: {
                },
            }}
        >
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="Splash1" component={Splash1} options={{headerShown: false}} />
            <Stack.Screen name="Splash2" component={Splash2} options={{headerShown: false}} />

            <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
            <Stack.Screen name="Registration" component={Registration} options={{title: "Register New Account"}} />
            <Stack.Screen name="Login" component={Login} />   
            <Stack.Screen name="OTPVerification" component={OTPVerification} options={{title: "OTP Verification"}}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{title: "Forgot Password"}} />
            <Stack.Screen name="ResetVerification" component={ResetVerification} options={{title: "OTP Verification"}} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="PasswordChange" component={PasswordChange} options={{title: "Reset Password"}} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default MainStack