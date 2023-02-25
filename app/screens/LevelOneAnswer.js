import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles from '../styles'
import { Avatar, Button, ButtonGroup } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';

const LevelOneAnswer = ({route, navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")

    const {answers} = route.params
    const correct_option = Number(answers.correct_option)

    React.useEffect(() => {
        console.log(answers)
    }, [])

    return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
        <View style={globalStyles.container}>
            {/* <ScrollView> */}
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
                                title={answers.option_1}
                                onPress={() => navigation.navigate(correct_option == 1 ? "AnswerCorrectScreen" : "AnswerWrongScreen")}
                            />
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_2}
                                onPress={() => navigation.navigate(correct_option == 2 ? "AnswerCorrectScreen" : "AnswerWrongScreen")}
                            />
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_3}
                                onPress={() => navigation.navigate(correct_option == 3 ? "AnswerCorrectScreen" : "AnswerWrongScreen")}
                            />
                            <Button 
                                containerStyle={globalStyles.answerButton.containerStyle}
                                buttonStyle={globalStyles.answerButton.buttonStyle}
                                title={answers.option_4}
                                onPress={() => navigation.navigate(correct_option == 4 ? "AnswerCorrectScreen" : "AnswerWrongScreen")}
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

export default LevelOneAnswer
