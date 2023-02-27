import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles from '../styles'
import { Avatar, Button, ButtonGroup } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { StoreContext } from '../App';

const LevelTwoAnswer = ({route, navigation}) => {
    const [buttonPressed, setButtonPressed] = React.useState(false)
    const {state, setState} = React.useContext(StoreContext)

    const {answers, button} = route.params
    const correct_option = Number(answers.correct_option)

    React.useEffect(() => {
        console.log(answers)
    }, [])

    const handleButtonPress = (pressedBtn) => {
            setButtonPressed(true)
        
             let remainingAttempt = state.levelTwoRemainingAttempt - 1
            setState(state => ({...state, 
                levelTwoRemainingAttempt: remainingAttempt,
                levelTwoCorrectAnswerButtons: [...state.levelTwoCorrectAnswerButtons, button]}
            ))
            
            navigation.push("AnswerStatusScreen", {
                answerCorrect: (pressedBtn == correct_option),
                level: 2, 
                remainingAttempt, 
                nextScreenName: "LevelThreeQuestionScreen"
            })
        }

    return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
        <View style={globalStyles.container}>
            {/* <ScrollView> */}
                <View style={globalStyles.innerContainer}>
                    <View style={globalStyles.topView}>
                        <BackButton />

                        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                            <Text style={globalStyles.heading}>Level 2</Text>
                        </View>
                    </View>
    
                    <View style={globalStyles.bottomView}>
                        <View style={{flexDirection: "column", alignItems: "center"}}>
                            <Text style={globalStyles.description}>Your Question</Text>
                            <Text style={[globalStyles.description, {fontSize: 20, fontWeight: 'bold'}]}>{answers.question}</Text>
                        </View>

                        <View style={{flexDirection: "column", paddingHorizontal: "20%", paddingVertical: 20}}>
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_1}
                                disabled={buttonPressed}
                                onPress={() => handleButtonPress(1)}
                            />
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_2}
                                disabled={buttonPressed}
                                onPress={() => handleButtonPress(2)}
                            />
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_3}
                                disabled={buttonPressed}
                                onPress={() => handleButtonPress(3)}
                            />
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_4}
                                disabled={buttonPressed}
                                onPress={() => handleButtonPress(4)}
                            />
                        </View>
    
                    </View>
                </View>
            {/* </ScrollView> */}

        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     buttonStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 80, 
        width: 80, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: "#686565"
     },
     buttonHoverStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 80, 
        width: 80, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 40, 
        fontWeight: "400"
     }
})

export default LevelTwoAnswer
