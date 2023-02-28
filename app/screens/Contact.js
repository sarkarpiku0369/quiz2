import React from 'react'
import { ScrollView, StyleSheet, View,Image, Text, TextInput ,TouchableHighlight} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
//import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { Feather } from '@expo/vector-icons';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { Button } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';

const Contact = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")

    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [email, setEmail] = React.useState("")

    React.useEffect(() => {
        if(selectedButton != "") {
            navigation.navigate("LevelOneAnswerScreen")
        }
    })
    
  return (
   <SafeAreaView style={styles.container}>
        <View style={{flex: 1, justifyContent: "center"}}>
            <View style={{flexDirection: "column", alignItems: "center"}}>
                <Image 
                    source={require("../assets/Illustration.png")}
                />
            </View>
            <View style={styles.subbody}>

                <View style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Name"
                        placeholderTextColor = "#858494"
                        autoCapitalize = "none"
                        onChangeText={(text) => setName(text)}
                    />
                </View>

                <View style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Phone Number"
                        placeholderTextColor = "#858494"
                        autoCapitalize = "none"
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>

                <View style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email Address"
                        placeholderTextColor = "#858494"
                        autoCapitalize = "none"
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

            <Button
                buttonStyle={styles.submitButton}
                title="Submit"
                onPress={() => navigation.navigate("ThankYou")}

                
            />
            </View>
         </View>

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcffe1',
    },
    subbody:{
        // flex: 0.6,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 31,
        backgroundColor: "#ffffff"
    },
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
     },
     tinyLogo: {
        width: 50,
        height: 50,
      },
      input: {
        width: "100%",
        borderColor: '#d9d8dd',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
     submitButton: {
        backgroundColor: primaryColor,
        padding: 10,
        margin: 15,
        height: 40,
        height: 50,
        borderRadius: 100
     },
     submitButtonText:{
        color: 'white',
        backgroundColor:buttonColor
     }
})

export default Contact
