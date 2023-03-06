import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDetails from '../../screens/GameDetails';
import LevelOneQuestion from '../../screens/LevelOneQuestion';
import LevelOneAnswer from '../../screens/LevelOneAnswer';
import AnswerCorrect from '../../screens/AnswerStatusScreen';
import AnswerWrong from '../../screens/AnswerWrong';
import MyStatus from '../../screens/MyStatus';
import WinPrize from '../../screens/WinPrize';
import Contact from '../../screens/Contact';
import WinSuccess from '../../screens/WinSuccess';
import ThankYou from '../../screens/ThankYou';
import Home from '../../screens/Home';
//user
import Main from '../../screens/authentication/Main';
import Login from '../../screens/authentication/Login';
import Registration from '../../screens/authentication/Registration';

import OTPVerification from '../../screens/authentication/OTPVerification';
import ResetPassword from '../../screens/authentication/ResetPassword';
import ResetVariffcation from '../../screens/authentication/ResetVerification';
import NewPassword from '../../screens/authentication/NewPassword';
import LevelTwoQuestion from '../../screens/LevelTwoQuestion';
import LevelTwoAnswer from '../../screens/LevelTwoAnswer';
import LevelThreeQuestion from '../../screens/LevelThreeQuestion';
import LevelThreeAnswer from '../../screens/LevelThreeAnswer';
import LevelFourQuestion from '../../screens/LevelFourQuestion';
import LevelFourAnswer from '../../screens/LevelFourAnswer';
import LevelFiveQuestion from '../../screens/LevelFiveQuestion';
import LevelFiveAnswer from '../../screens/LevelFiveAnswer';

const HomeStack = () => {
  
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >   
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeScreen" component={GameDetails} />
            
            
            <Stack.Screen name="LevelOneQuestionScreen" component={LevelOneQuestion} />
            <Stack.Screen name="LevelOneAnswerScreen" component={LevelOneAnswer} />
                   
            <Stack.Screen name="LevelTwoQuestionScreen" component={LevelTwoQuestion} />
            <Stack.Screen name="LevelTwoAnswerScreen" component={LevelTwoAnswer} />

            <Stack.Screen name="LevelThreeQuestionScreen" component={LevelThreeQuestion} />
            <Stack.Screen name="LevelThreeAnswerScreen" component={LevelThreeAnswer} />

            <Stack.Screen name="LevelFourQuestionScreen" component={LevelFourQuestion} />
            <Stack.Screen name="LevelFourAnswerScreen" component={LevelFourAnswer} />

            <Stack.Screen name="LevelFiveQuestionScreen" component={LevelFiveQuestion} />
            <Stack.Screen name="LevelFiveAnswerScreen" component={LevelFiveAnswer} />


            <Stack.Screen name="AnswerStatusScreen" component={AnswerCorrect} />


            <Stack.Screen name="AnswerWrongScreen" component={AnswerWrong} />
            <Stack.Screen name="MyStatus" component={MyStatus} />
            <Stack.Screen name="WinPrize" component={WinPrize} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="WinSuccess" component={WinSuccess} />
            <Stack.Screen name="ThankYou" component={ThankYou} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ResetVariffcation" component={ResetVariffcation} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Navigator>
    )
}

export default HomeStack