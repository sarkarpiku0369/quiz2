import React from 'react'
import { ScrollView, StyleSheet, View,Image, Text, TextInput ,TouchableHighlight, TouchableOpacity} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
//import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { AntDesign } from '@expo/vector-icons';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { Button } from '@rneui/base';

const ThankYou = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")

    React.useEffect(() => {
        if(selectedButton != "") {
            navigation.navigate("Home", {screen: 'Home'})
        }
    })
    
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity 
            activeOpacity={1} 
            style={{flex: 1, justifyContent: "center"}}
            onPress={() => navigation.navigate("HomeTab", {screen: 'Home'})} 
        >
                <View style={{flexDirection: "column", alignItems: "center"}}>
                    <Image 
                        source={require("../assets/thankyou.png")}
                    />
                </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcffe1',
    },
     submitButton: {
        backgroundColor: primaryColor,
        padding: 10,
        margin: 15,
        height: 60,
        
        borderRadius: 100
     },
     share:{
        color: primaryColor,
        marginLeft:20,
     }
})

export default ThankYou
