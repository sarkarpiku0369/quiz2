import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Vibration, ActivityIndicator } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { Avatar, Button } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import axiosInstance from './utils';
import { StoreContext } from '../App';
import { Feather } from '@expo/vector-icons';

const LevelOneQuestion = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const {state, setState} = React.useContext(StoreContext)

    React.useEffect(() => {
        Vibration.vibrate(0.2 * 1000)
        if(selectedButton) {
            setState(state => ({...state, 
                levelOneTouched: true, 
                levelOnePressedButtons: [...state.levelOnePressedButtons, selectedButton]
            }))
            navigation.navigate("LevelOneAnswerScreen", {answers: questions[selectedButton-1], button: selectedButton})
        }
    }, [selectedButton])

    React.useEffect(() => {
        setState(state => ({...state, levelOneTouched: true}))
        setLoading(true)
        axiosInstance.get("/question?level=1")
        .then(response => {
            if(response.status == 200) {
                setQuestions(response.data.questions)
                setLoading(false)
            }
        })
    }, [])


  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
    <ScrollView 
        style={{backgroundColor: "#DCFFE0"}}
        contentContainerStyle={{flex: 1}}
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
                    <Text style={globalStyles.description}>Go to the Next Level with 1</Text>
                    <Text style={globalStyles.description}>Question Answers</Text>
                    
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{top:30,color:"#262626",fontSize:16,fontWeight:"400"}}>Select your Question</Text>
                </View>

                {loading ? (
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20, top:40}}>
                        <ActivityIndicator size="large" color={primaryColor} />
                    </View>

                ) : (
                    <>
                        <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20, top:40}}>
                            <Button 
                                containerStyle={styles.buttonStyle}
                                buttonStyle={styles.buttonStyle}
                                disabledStyle={{
                                    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
                                }}

                                disabled={state.levelOnePressedButtons.includes(1) || state.levelOneRemainingAttempt == 0}
                                onPress={() => setSelectedButton(1)}
                            >
                                {state.levelOnePressedButtons.includes(1) || state.levelOneRemainingAttempt == 0 ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Text style={styles.buttonTextStyle}>1</Text>
                                )}
                            </Button>
                            
                            <Button 
                                containerStyle={styles.buttonStyle}
                                buttonStyle={styles.buttonStyle}
                                disabledStyle={{
                                    backgroundColor: state.levelOneCorrectAnswerButtons.includes(2) ? primaryColor : "red",
                                }}
                                disabled={state.levelOnePressedButtons.includes(2) || state.levelOneRemainingAttempt == 0}
                                onPress={() => setSelectedButton(2)}
                            >
                                {state.levelOnePressedButtons.includes(2) || state.levelOneRemainingAttempt == 0 ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Text style={styles.buttonTextStyle}>2</Text>
                                )}
                            </Button>

                            <Button 
                                containerStyle={styles.buttonStyle}
                                buttonStyle={styles.buttonStyle}
                                disabledStyle={{
                                    backgroundColor: state.levelOneCorrectAnswerButtons.includes(3) ? primaryColor : "red",
                                }}
                                disabled={state.levelOnePressedButtons.includes(3) || state.levelOneRemainingAttempt == 0}
                                onPress={() => setSelectedButton(3)}
                            >
                                {state.levelOnePressedButtons.includes(3) || state.levelOneRemainingAttempt == 0 ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Text style={styles.buttonTextStyle}>3</Text>
                                )}
                            </Button>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                            <Button 
                                containerStyle={styles.buttonStyle}
                                buttonStyle={styles.buttonStyle}
                                disabled={state.levelOnePressedButtons.includes(4) || state.levelOneRemainingAttempt == 0}
                                disabledStyle={{
                                    backgroundColor: state.levelOneCorrectAnswerButtons.includes(4) ? primaryColor : "red",
                                }}
                                onPress={() => setSelectedButton(4)}
                            >
                                {state.levelOnePressedButtons.includes(4) || state.levelOneRemainingAttempt == 0 ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Text style={styles.buttonTextStyle}>4</Text>
                                )}
                            </Button>
                            
                            <Button 
                                containerStyle={styles.buttonStyle}
                                buttonStyle={styles.buttonStyle}
                                disabled={state.levelOnePressedButtons.includes(5) || state.levelOneRemainingAttempt == 0}
                                disabledStyle={{
                                    backgroundColor: state.levelOneCorrectAnswerButtons.includes(5) ? primaryColor : "red",
                                }}
                                onPress={() => setSelectedButton(5)}
                            >
                                {state.levelOnePressedButtons.includes(5) || state.levelOneRemainingAttempt == 0 ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Text style={styles.buttonTextStyle}>5</Text>
                                )}
                            </Button>

                            <Button 
                                containerStyle={styles.buttonStyle}
                                buttonStyle={styles.buttonStyle}
                                disabled={state.levelOnePressedButtons.includes(6) || state.levelOneRemainingAttempt == 0}
                                disabledStyle={{
                                    backgroundColor: state.levelOneCorrectAnswerButtons.includes(5) ? primaryColor : "red",
                                }}
                                onPress={() => setSelectedButton(6)}
                            >
                                {state.levelOnePressedButtons.includes(6)  || state.levelOneRemainingAttempt == 0 ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Text style={styles.buttonTextStyle}>6</Text>
                                )}
                            </Button>
                        </View>
                    </>
                )}


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
     }
})

export default LevelOneQuestion
