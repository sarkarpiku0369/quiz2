import React from 'react'
import { ScrollView, StyleSheet, View,Image, Text, TextInput ,TouchableHighlight} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
//import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { AntDesign } from '@expo/vector-icons';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { Button } from '@rneui/base';

const WinSuccess = ({route, navigation}) => {
    const {item} = route.params
    const [selectedButton, setSelectedButton] = React.useState("")
    React.useEffect(() => {
        if(selectedButton != "") {
            navigation.navigate("LevelOneAnswerScreen")
        }
    })
    
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex: 1, justifyContent: "center"}}>
        <View style={{flexDirection: "column", alignItems: "center", backgroundColor: "#3AB54A", marginHorizontal: 20, paddingVertical: 50, borderRadius: 20}}>
            <Image 
                source={require("../assets/Goodjob.png")}
            />
            <Text style={{fontSize: 32, fontWeight: "bold", color: "white", padding: 10, textAlign: "center"}}>You Win {item.name}</Text>
        </View>
        <View style={{flexDirection:"row", alignItems: "center", justifyContent: 'center'}}>
            <View style={{width:280}}>
                <Button 
                    buttonStyle={styles.submitButton}
                    title="Collect Your Prize"
                    onPress={() => navigation.navigate("Contact", {item})}
                />
            </View>
            {/* <View style={{borderWidth: 1, borderColor: "#bcf0c2", padding: 10, borderRadius: 100, marginLeft: 12 }}>
                <AntDesign name="sharealt" color={primaryColor} size={24} />
            </View> */}
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

export default WinSuccess
