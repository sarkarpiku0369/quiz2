import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Vibration } from 'react-native'
import { Button } from '@rneui/base';
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { Avatar } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import axiosInstance from './utils';
import { StoreContext } from '../App';
import { Feather } from '@expo/vector-icons';

const LevelThreeQuestion = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState(null)
    const [questions, setQuestions] = React.useState([])
    const {state, setState} = React.useContext(StoreContext)

    React.useEffect(() => {
        Vibration.vibrate(0.2 * 1000)

        if(selectedButton) {
            setState(state => ({...state, 
                levelThreeTouched: true,
                levelThreePressedButtons: [...state.levelThreePressedButtons, selectedButton]
            }))
            navigation.navigate("LevelThreeAnswerScreen", {answers: questions[selectedButton-1], button: selectedButton})
        }
    }, [selectedButton])

    React.useEffect(() => {
        axiosInstance.get("/question?level=3")
        .then(response => {
            if(response.status == 200) {
                setQuestions(response.data.questions)
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
                        <Text style={globalStyles.heading}>Level 3</Text>
                    </View>
                </View>
 
                <ScrollView style={globalStyles.bottomView}>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.description}>Go to the Next Level with 3</Text>
                        <Text style={globalStyles.description}>Question Answers</Text>
                       
                    </View>
                    
                    <View style={{marginTop: 20, alignItems:"center"}}>
                        <Text style={{color:"#262626",fontSize:16,fontWeight:"400"}}>Select your Question</Text>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20}}>
                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(1) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(1)}
                            onPress={() => setSelectedButton(1)}
                        >
                            {state.levelThreePressedButtons.includes(1) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>1</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(2) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(2)}
                            onPress={() => setSelectedButton(2)}
                        >
                            {state.levelThreePressedButtons.includes(2) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>2</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(3) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(3)}
                            onPress={() => setSelectedButton(3)}
                        >
                            {state.levelThreePressedButtons.includes(3) ? (
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
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(4) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(4)}
                            onPress={() => setSelectedButton(4)}
                        >
                            {state.levelThreePressedButtons.includes(4) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>4</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(5) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(5)}
                            onPress={() => setSelectedButton(5)}
                        >
                            {state.levelThreePressedButtons.includes(5) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>5</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(6) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(6)}
                            onPress={() => setSelectedButton(6)}
                        >
                            {state.levelThreePressedButtons.includes(6) ? (
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
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(7) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(7)}
                            onPress={() => setSelectedButton(7)}
                        >
                            {state.levelThreePressedButtons.includes(7) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>7</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(8) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(8)}
                            onPress={() => setSelectedButton(8)}
                        >
                            {state.levelThreePressedButtons.includes(8) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>8</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(9) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(9)}
                            onPress={() => setSelectedButton(9)}
                        >
                            {state.levelThreePressedButtons.includes(9) ? (
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
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(10) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(10)}
                            onPress={() => setSelectedButton(10)}
                        >
                            {state.levelThreePressedButtons.includes(10) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>10</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(11) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(11)}
                            onPress={() => setSelectedButton(11)}
                        >
                            {state.levelThreePressedButtons.includes(11) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>11</Text>
                            )}
                        </Button>

                        <Button 
                            containerStyle={styles.buttonStyle}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={{
                                backgroundColor: state.levelThreeCorrectAnswerButtons.includes(12) ? primaryColor : "red",
                            }}
                            disabled={state.levelThreePressedButtons.includes(12)}
                            onPress={() => setSelectedButton(12)}
                        >
                            {state.levelThreePressedButtons.includes(12) ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Text style={styles.buttonTextStyle}>12</Text>
                            )}
                        </Button>
                    </View>
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
        height: 65, 
        width: 65, 
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
        backgroundColor: buttonColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 40, 
        fontWeight: "400"
     }
})

export default LevelThreeQuestion
