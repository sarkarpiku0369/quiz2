import React from 'react'
import { ScrollView, StyleSheet, View, Text, Touch2bleOpacity, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import globalStyles, { buttonColor, primaryColor } from '../styles'
import BackButton from '../components/BackButton';
import { StoreContext } from "../App"
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@rneui/base';

const MyStatus = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")

    const { state, setState } = React.useContext(StoreContext)

    const back = () => {
        if(state.currentScreen == "LevelOneQuestionScreen") {
            setState(state => ({...state, 
                levelOneRemainingAttempt: 2,
                levelOnePassed: false,
                levelOnePressedButtons: [],
                levelOneCorrectAnswerButtons: [],
                levelOneWrongAnswerButtons: [],
                levelOneMinimumCorrectAnswerRequire: 2,
            }))
        }
        else if(state.currentScreen == "LevelTwoQuestionScreen") {
            setState(state => ({...state, 
                levelTwoRemainingAttempt: 3,
                levelTwoPassed: false,
                levelTwoPressedButtons: [],
                levelTwoCorrectAnswerButtons: [],
                levelTwoWrongAnswerButtons: [],
                levelTwoMinimumCorrectAnswerRequire: 2,
            }))
        }
        else if(state.currentScreen == "LevelThreeQuestionScreen") {
            setState(state => ({...state, 
                levelThreeRemainingAttempt: 3,
                levelThreePassed: false,
                levelThreePressedButtons: [],
                levelThreeCorrectAnswerButtons: [],
                levelThreeWrongAnswerButtons: [],
                levelThreeMinimumCorrectAnswerRequire: 2,
            }))
        }
        else if(state.currentScreen == "LevelFourQuestionScreen") {
            setState(state => ({...state, 
                levelFourRemainingAttempt: 3,
                levelFourPassed: false,
                levelFourPressedButtons: [],
                levelFourCorrectAnswerButtons: [],
                levelFourWrongAnswerButtons: [],
                levelFourMinimumCorrectAnswerRequire: 2,
            }))
        }
        else {
            setState(state => ({...state, 
                levelFiveRemainingAttempt: 3,
                levelFivePassed: false,
                levelFivePressedButtons: [],
                levelFiveCorrectAnswerButtons: [],
                levelFiveWrongAnswerButtons: [],
                levelFiveMinimumCorrectAnswerRequire: 2,
            }))
        }

        
        navigation.navigate("HomeTab", {screen: state.currentScreen})
    }

    return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
        <View style={globalStyles.container}>
            <View style={globalStyles.innerContainer}>
                <View style={globalStyles.topView}>
                    <BackButton />

                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <Text style={globalStyles.heading}>My Status</Text>
                    </View>
                </View>

                <ScrollView style={globalStyles.bottomView}>
                    
                    <TouchableOpacity activeOpacity={1} style={{flexDirection: "column", alignItems: "center", backgroundColor: "#3AB54A", marginBottom: 20, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20}}>
                        {state.levelOneTouched ? (
                            <>
                                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                                    <View style={{flexDirection: "column", alignItems: "center"}}>
                                        <Ionicons name="ios-checkmark-circle" size={40} color="white" />
                                        <Text style={{fontSize: 25, color: "white", fontWeight: "bold"}}>{state.levelOneCorrectAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Correct</Text>
                                    </View>
                                    <View style={{flexDirection: "column", alignItems: "center", marginLeft: 50}}>
                                        <Entypo name="circle-with-cross" size={40} color="#FFDE1D" />
                                        <Text style={{fontSize: 25, color: "#FFDE1D", fontWeight: "bold"}}>{state.levelOneWrongAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "#FFDE1D", fontWeight: "bold"}}>Wrong</Text>
                                    </View>
                                </View>
                                {state.gameLoss && state.currentScreen == "LevelOneQuestionScreen" && (
                                    <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                        <Ionicons name="ios-reload" size={15} color="white" />
                                        <Text style={{color: "white", fontSize: 15, marginLeft: 10}}>Try Again</Text>
                                    </TouchableOpacity>
                                )}
                            </>
                        ): (
                            <>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <Feather name="lock" size={40} color={"white"} />
                                    <Text style={{marginTop: 10, fontSize: 24, fontWeight: "bold", color: "white"}}>Level 1</Text>
                                </View>
                            </>
                        )}
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={1} style={{flexDirection: "column", alignItems: "center", backgroundColor: "#3AB54A", marginBottom: 20, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20}}>
                        {state.levelTwoTouched ? (
                            <>
                                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                                    <View style={{flexDirection: "column", alignItems: "center"}}>
                                        <Ionicons name="ios-checkmark-circle" size={40} color="white" />
                                        <Text style={{fontSize: 25, color: "white", fontWeight: "bold"}}>{state.levelTwoCorrectAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Correct</Text>
                                    </View>
                                    <View style={{flexDirection: "column", alignItems: "center", marginLeft: 50}}>
                                        <Entypo name="circle-with-cross" size={40} color="#FFDE1D" />
                                        <Text style={{fontSize: 25, color: "#FFDE1D", fontWeight: "bold"}}>{state.levelTwoWrongAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "#FFDE1D", fontWeight: "bold"}}>Wrong</Text>
                                    </View>
                                </View>
                                {state.gameLoss && state.currentScreen == "LevelTwoQuestionScreen" && (
                                    <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                        <Ionicons name="ios-reload" size={15} color="white" />
                                        <Text style={{color: "white", fontSize: 15, marginLeft: 10}}>Try Again</Text>
                                    </TouchableOpacity>
                                )}
                            </>
                        ): (
                            <>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <Feather name="lock" size={40} color={"white"} />
                                    <Text style={{marginTop: 10, fontSize: 24, fontWeight: "bold", color: "white"}}>Level 2</Text>
                                </View>
                            </>
                        )}
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={1} style={{flexDirection: "column", alignItems: "center", backgroundColor: "#3AB54A", marginBottom: 20, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20}}>
                        {state.levelThreeTouched ? (
                            <>
                                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                                    <View style={{flexDirection: "column", alignItems: "center"}}>
                                        <Ionicons name="ios-checkmark-circle" size={40} color="white" />
                                        <Text style={{fontSize: 25, color: "white", fontWeight: "bold"}}>{state.levelThreeCorrectAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Correct</Text>
                                    </View>
                                    <View style={{flexDirection: "column", alignItems: "center", marginLeft: 50}}>
                                        <Entypo name="circle-with-cross" size={40} color="#FFDE1D" />
                                        <Text style={{fontSize: 25, color: "#FFDE1D", fontWeight: "bold"}}>{state.levelThreeWrongAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "#FFDE1D", fontWeight: "bold"}}>Wrong</Text>
                                    </View>
                                </View>
                                {state.gameLoss && state.currentScreen == "LevelThreeQuestionScreen" &&  (
                                    <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                        <Ionicons name="ios-reload" size={15} color="white" />
                                        <Text style={{color: "white", fontSize: 15, marginLeft: 10}}>Try Again</Text>
                                    </TouchableOpacity>
                                )}
                            </>
                        ): (
                            <>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <Feather name="lock" size={40} color={"white"} />
                                    <Text style={{marginTop: 10, fontSize: 24, fontWeight: "bold", color: "white"}}>Level 3</Text>
                                </View>
                            </>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={{flexDirection: "column", alignItems: "center", backgroundColor: "#3AB54A", marginBottom: 20, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20}}>
                        {state.levelFourTouched ? (
                            <>
                                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                                    <View style={{flexDirection: "column", alignItems: "center"}}>
                                        <Ionicons name="ios-checkmark-circle" size={40} color="white" />
                                        <Text style={{fontSize: 25, color: "white", fontWeight: "bold"}}>{state.levelFourCorrectAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Correct</Text>
                                    </View>
                                    <View style={{flexDirection: "column", alignItems: "center", marginLeft: 50}}>
                                        <Entypo name="circle-with-cross" size={40} color="#FFDE1D" />
                                        <Text style={{fontSize: 25, color: "#FFDE1D", fontWeight: "bold"}}>{state.levelFourWrongAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "#FFDE1D", fontWeight: "bold"}}>Wrong</Text>
                                    </View>
                                </View>
                                {state.gameLoss && state.currentScreen == "LevelFourQuestionScreen" &&  (
                                    <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                        <Ionicons name="ios-reload" size={15} color="white" />
                                        <Text style={{color: "white", fontSize: 15, marginLeft: 10}}>Try Again</Text>
                                    </TouchableOpacity>
                                )}
                            </>
                        ): (
                            <>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <Feather name="lock" size={40} color={"white"} />
                                    <Text style={{marginTop: 10, fontSize: 24, fontWeight: "bold", color: "white"}}>Level 4</Text>
                                </View>
                            </>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={{flexDirection: "column", alignItems: "center", backgroundColor: "#3AB54A", marginBottom: 60, marginHorizontal: 20, paddingVertical: 20, borderRadius: 20}}>
                        {state.levelFiveTouched ? (
                            <>
                                <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                                    <View style={{flexDirection: "column", alignItems: "center"}}>
                                        <Ionicons name="ios-checkmark-circle" size={40} color="white" />
                                        <Text style={{fontSize: 25, color: "white", fontWeight: "bold"}}>{state.levelFiveCorrectAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Correct</Text>
                                    </View>
                                    <View style={{flexDirection: "column", alignItems: "center", marginLeft: 50}}>
                                        <Entypo name="circle-with-cross" size={40} color="#FFDE1D" />
                                        <Text style={{fontSize: 25, color: "#FFDE1D", fontWeight: "bold"}}>{state.levelFiveWrongAnswerButtons.length}</Text>
                                        <Text style={{fontSize: 20, color: "#FFDE1D", fontWeight: "bold"}}>Wrong</Text>
                                    </View>
                                </View>
                                {state.gameLoss && state.currentScreen == "LevelFiveQuestionScreen" &&  (
                                    <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                        <Ionicons name="ios-reload" size={15} color="white" />
                                        <Text style={{color: "white", fontSize: 15, marginLeft: 10}}>Try Again</Text>
                                    </TouchableOpacity>
                                )}
                            </>
                        ): (
                            <>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <Feather name="lock" size={40} color={"white"} />
                                    <Text style={{marginTop: 10, fontSize: 24, fontWeight: "bold", color: "white"}}>Level 5</Text>
                                </View>
                            </>
                        )}
                    </TouchableOpacity>

                </ScrollView>
            </View>
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
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: "#686565"
     },
     buttonHoverStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 50, 
        width: 50, 
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

export default MyStatus
