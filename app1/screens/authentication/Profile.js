//rafce
import { Button } from '@rneui/base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,Image } from "react-native";
import { primaryColor } from '../../styles';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Profile = ({navigation}) => {

    const [email, setEmail]= React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword]  = React.useState("")
    const [submitting, setSubmitting] = React.useState(false)
    

    return (
        <ScrollView
            style={{backgroundColor: "#DCFFE0"}} 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Text style={{marginTop: 20, marginLeft: 10, fontSize: 20}}>Account</Text>
            </View>

            <TouchableOpacity activeOpacity={1} style={{flexDirection: "row", justifyContent: 'space-between', backgroundColor: "white", borderRadius: 10, marginHorizontal: 20, paddingVertical: 30, marginVertical: 10}}>
                <View style={{flexDirection: "column", justifyContent: "center", marginHorizontal: 20}}>
                    <AntDesign name="user" size={24} color={primaryColor} />
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Update Profile</Text>
                    <Text style={{color: "grey"}}>Update Username, Country etc</Text>
                </View>
                <View style={{flexDirection: "column", justifyContent: "center", marginHorizontal: 20}}>
                    <FontAwesome name="chevron-right" size={18} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={{flexDirection: "row", justifyContent: 'space-between', backgroundColor: "white", borderRadius: 10, marginHorizontal: 20, paddingVertical: 30, marginVertical: 10}}>
                <View style={{flexDirection: "column", justifyContent: "center", marginHorizontal: 20}}>
                    <Fontisto name="email" size={24} color={primaryColor} />
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Change Email Address</Text>
                    <Text style={{color: "grey"}}>abc@gmail.com</Text>
                </View>
                <View style={{flexDirection: "column", justifyContent: "center", marginHorizontal: 20}}>
                    <FontAwesome name="chevron-right" size={18} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("PasswordReset")} activeOpacity={1} style={{flexDirection: "row", justifyContent: 'space-between', backgroundColor: "white", borderRadius: 10, marginHorizontal: 20, paddingVertical: 30, marginVertical: 10}}>
                <View style={{flexDirection: "column", justifyContent: "center", marginHorizontal: 20}}>
                    <AntDesign name="lock" size={24} color={primaryColor} />
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Change Password        </Text>
                    <Text style={{color: "grey"}}>last change 1 year ago</Text>
                </View>
                <View style={{flexDirection: "column", justifyContent: "center", marginHorizontal: 20}}>
                    <FontAwesome name="chevron-right" size={18} color="black" />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 14
    },
    input: {
        width: "90%",
        borderColor: '#d9d8dd',
        borderWidth: 0,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
     buttonStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 60, 
        width: "100%", 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
     buttonHoverStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 50, 
        width: 50, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 30, 
        fontWeight: "400"
     },
     
})

export default Profile