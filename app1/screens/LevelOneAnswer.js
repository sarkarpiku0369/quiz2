import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Vibration } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles from '../styles'
import { Avatar, Button, ButtonGroup } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { StoreContext } from '../App';
import CircularProgress from 'react-native-circular-progress-indicator';


const LevelOneAnswer = ({route, navigation}) => {
    const [buttonPressed, setButtonPressed] = React.useState(false)
    const {state, setState} = React.useContext(StoreContext)

    const {answers, button} = route.params

    const correct_option = Number(answers.correct_option)
    
    const [start, startTimer] = React.useState(200)
    const [duration, setDuration] = React.useState(1)
    const [remainingTime, setRemainingTime] = React.useState(10)

    const [focus, setFocus] = React.useState(true)
    const [timerId, setTimerId] = React.useState(null)
    
    React.useEffect(() => {
        navigation.addListener("blur", () => {setFocus(false)})

        const id = setTimeout(() => {
            if(focus)
                navigation.navigate("LevelOneQuestionScreen")
        }, 10000)

        setTimerId(id)

    }, [navigation])

    React.useEffect(() => {
        console.log(focus)
        clearTimeout(timerId)
    }, [focus])


    const handleButtonPress = (pressedBtn) => {
            Vibration.vibrate(0.2 * 1000)
            setButtonPressed(true)
        
            let remainingAttempt = state.levelOneRemainingAttempt - 1

            if(pressedBtn == correct_option) {
                setState(state => ({...state, 
                    levelOneRemainingAttempt: remainingAttempt,
                    levelOneCorrectAnswerButtons: [...state.levelOneCorrectAnswerButtons, button]}
                ))
            }
            else {
                setState(state => ({...state, 
                    levelOneRemainingAttempt: remainingAttempt,
                    levelOneWrongAnswerButtons: [...state.levelOneWrongAnswerButtons, button]}
                ))
            }
            
            navigation.push("AnswerStatusScreen", {
                answerCorrect: (pressedBtn == correct_option),
                level: 1, 
                remainingAttempt, 
                nextScreenName: "LevelTwoQuestionScreen"
            })
        }

    return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
        <ScrollView 
            style={{backgroundColor: "#DCFFE0"}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={globalStyles.innerContainer}>
                <View style={globalStyles.topView}>
                    <BackButton />

                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <Text style={globalStyles.heading}>Level 1</Text>
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
                        titleStyle={globalStyles.answerButton.titleStyle}
                            title={answers.option_1}
                            disabled={buttonPressed}
                            onPress={() => handleButtonPress(1)}
                        />
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                                                            buttonStyle={globalStyles.answerButton.buttonStyle}
                        titleStyle={globalStyles.answerButton.titleStyle}
                            title={answers.option_2}
                            disabled={buttonPressed}
                            onPress={() => handleButtonPress(2)}
                        />
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                                                            buttonStyle={globalStyles.answerButton.buttonStyle}
                        titleStyle={globalStyles.answerButton.titleStyle}
                            title={answers.option_3}
                            disabled={buttonPressed}
                            onPress={() => handleButtonPress(3)}
                        />
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                                                            buttonStyle={globalStyles.answerButton.buttonStyle}
                        titleStyle={globalStyles.answerButton.titleStyle}
                            title={answers.option_4}
                            disabled={buttonPressed}
                            onPress={() => handleButtonPress(4)}
                        />
                    </View>
                    
                    <View style={{flexDirection: "row", justifyContent: "center"}}>
                        <CircularProgress
                            value={0}
                            radius={50}
                            maxValue={10}
                            initialValue={10}
                            progressValueColor={primaryColor}
                            activeStrokeWidth={10}
                            inActiveStrokeWidth={10}
                            duration={10000}
                            title={'Second'}
                            titleColor={primaryColor}
                            titleStyle={{fontWeight: 'bold'}}
                            inActiveStrokeColor={'#2ecc71'}
                            inActiveStrokeOpacity={0.2}
                            strokeColorConfig={[
                                { color: 'red', value: 0 },
                                { color: 'yellowgreen', value: 6 },
                                { color:  primaryColor, value: 10 },
                              ]}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
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

export default LevelOneAnswer
