import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Vibration, ActivityIndicator } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor, secondaryColor } from '../styles'
import { Avatar } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import axiosInstance from './utils';
import { StoreContext } from '../App';
import { Feather } from '@expo/vector-icons';
import { Button } from '@rneui/base';

const LevelTwoQuestion = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const {state, setState} = React.useContext(StoreContext)

    React.useEffect(() => {
        Vibration.vibrate(0.2 * 1000)

        if(selectedButton) {
            setState(state => ({...state, 
                levelTwoTouched: true, 
                levelTwoPressedButtons: [...state.levelTwoPressedButtons, selectedButton]
            }))
            navigation.navigate("LevelTwoAnswerScreen", {answers: questions[selectedButton-1], button: selectedButton})
        }
    }, [selectedButton])

    React.useEffect(() => {
        setState(state => ({...state, levelTwoTouched: true,  currentScreen: "LevelTwoQuestionScreen"}))
        setLoading(true)
        axiosInstance.get("/question?level=2")
        .then(response => {
            if(response.status == 200) {
                setQuestions(response.data.questions)
                setLoading(false)
            }
        })
    }, [])

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
 
                <ScrollView style={styles.bottomView}>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.description}>Go to the Next Level with 2</Text>
                        <Text style={globalStyles.description}>Question Answers</Text>
                       
                    </View>
                    
                    <View style={{marginTop: 20, alignItems:"center"}}>
                        <Text style={{color:"#262626",fontSize:16,fontWeight:"400"}}>Select your Question</Text>
                    </View>

                    {loading ? (
                        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20, top:40}}>
                            <ActivityIndicator size="large" color={primaryColor} />
                        </View>
                    ) : (
                        <>
                            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20}}>
                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}                            
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(1) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(1) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(1)}
                                >
                                    {state.levelTwoPressedButtons.includes(1) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>1</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(2) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(2) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(2)}
                                >
                                    {state.levelTwoPressedButtons.includes(2) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>2</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(3) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(3) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(3)}
                                >
                                    {state.levelTwoPressedButtons.includes(3) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>3</Text>
                                    )}
                                </Button>
                            </View>

                            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10}}>
                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(4) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(4) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(4)}
                                >
                                    {state.levelTwoPressedButtons.includes(4) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>4</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(5) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(5) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(5)}
                                >
                                    {state.levelTwoPressedButtons.includes(5) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>5</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(6) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(6) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(6)}
                                >
                                    {state.levelTwoPressedButtons.includes(6) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>6</Text>
                                    )}
                                </Button>
                            </View>

                            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20}}>
                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(7) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(7) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(7)}
                                >
                                    {state.levelTwoPressedButtons.includes(7) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>7</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(8) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(8) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(8)}
                                >
                                    {state.levelTwoPressedButtons.includes(8) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>8</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(9) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(9) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(9)}
                                >
                                    {state.levelTwoPressedButtons.includes(9) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>9</Text>
                                    )}
                                </Button>
                            </View>

                            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10}}>
                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(10) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(10) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(10)}
                                >
                                    {state.levelTwoPressedButtons.includes(10) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>10</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(11) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(11) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(11)}
                                >
                                    {state.levelTwoPressedButtons.includes(11) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>11</Text>
                                    )}
                                </Button>

                                <Button 
                                    containerStyle={styles.buttonStyle}
                                    buttonStyle={styles.buttonStyle}
                                    disabledStyle={{
                                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(12) ? primaryColor : "red",
                                    }}
                                    disabled={state.levelTwoPressedButtons.includes(12) || state.levelTwoRemainingAttempt == 0}
                                    onPress={() => setSelectedButton(12)}
                                >
                                    {state.levelTwoPressedButtons.includes(12) || state.levelTwoRemainingAttempt == 0 ? (
                                        <Feather name="lock" size={24} color="white" />
                                    ) : (
                                        <Text style={styles.buttonTextStyle}>12</Text>
                                    )}
                                </Button>
                            </View>
                        </>
                    )}
                </ScrollView>
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
        height: 60, 
        width: 60, 
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
        backgroundColor: buttonColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 30, 
        fontWeight: "400"
     },
     bottomView: {
        flex: 0.8,
        padding: 14,
        backgroundColor: secondaryColor,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 38
     }
     
})

export default LevelTwoQuestion
