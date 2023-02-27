import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { Avatar } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import axiosInstance from './utils';
import { StoreContext } from '../App';

const LevelThreeQuestion = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState(null)
    const [questions, setQuestions] = React.useState([])
    const {state, setState} = React.useContext(StoreContext)

    React.useEffect(() => {
        if(selectedButton) {
            setState(state => ({...state, levelThreeTouched: true}))
            navigation.navigate("LevelThreeAnswerScreen", {answers: questions[selectedButton], button: selectedButton})
        }
    }, [selectedButton])

    React.useEffect(() => {
        axiosInstance.get("/question?level=3")
        .then(response => {
            if(response.status == 200) {
                console.log(response.data.questions)
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
 
                <View style={globalStyles.bottomView}>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.description}>Go to the Next Level with 3</Text>
                        <Text style={globalStyles.description}>Question Answers</Text>
                       
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Text style={{top:30,color:"#262626",fontSize:16,fontWeight:"400"}}>Select your Question</Text>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20,top:40}}>
                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == 1 && styles.buttonHoverStyle]} onPress={() => setSelectedButton(1)}>
                            <Text style={styles.buttonTextStyle}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == 2 && styles.buttonHoverStyle]} onPress={() => setSelectedButton(2)}>
                            <Text style={styles.buttonTextStyle}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == 3 && styles.buttonHoverStyle]} onPress={() => setSelectedButton(3)}>
                            <Text style={styles.buttonTextStyle}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == 4 && styles.buttonHoverStyle]} onPress={() => setSelectedButton(4)}>
                            <Text style={styles.buttonTextStyle}>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == 5 && styles.buttonHoverStyle]} onPress={() => setSelectedButton(5)}>
                            <Text style={styles.buttonTextStyle}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == 6 && styles.buttonHoverStyle]} onPress={() => setSelectedButton(6)}>
                            <Text style={styles.buttonTextStyle}>6</Text>
                        </TouchableOpacity>
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
        backgroundColor: buttonColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 40, 
        fontWeight: "400"
     }
})

export default LevelThreeQuestion
