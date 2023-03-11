//rafce
import { Button } from '@rneui/base';
import React from 'react';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import BackButton from '../../components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import { primaryColor } from '../../styles';
import axiosInstance from '../utils';


const UpdateProfile = ({navigation}) => {
    const [submitting, setSubmitting] = React.useState(false)
    const [name, setName] = React.useState("")
    const [email, setEmailAddress] = React.useState("")

    const handleSubmit = () => {
        setSubmitting(true)

        axiosInstance.post("/user/update", {name, email})
        .then(response => {
            if(response.status == 200) {
                Alert.alert('', 'Profile Updated Successfully', [
                    {text: 'OK', onPress: () => navigation.navigate("ProfileTab", {screen: 'ProfileScreen'})},
                ]);
                setSubmitting(false)
            }
        })
        .catch(err => {
            alert("Something Went Wrong!")
            setSubmitting(false)
        })
    }

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
            <ScrollView 
                contentContainerStyle={{flex: 1}} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flex: 1, backgroundColor:"#DCFFE0", padding: 14}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <BackButton color="black" />
                        <Text style={{justifyContent:"center", fontSize: 18, fontWeight: "bold"}}>Update Profile</Text>
                        <Text>{" "}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: "center", marginVertical: 10, paddingHorizontal: 10}}>
                        
                    </View>
                    <View>
                        <View style={{flexDirection: "column", paddingHorizontal: 15, marginBottom: 20}}>
                            <Text>Name</Text>
                            <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                                <AntDesign name="user" size={24} color={primaryColor} />
                                <TextInput style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Your Name"
                                    placeholderTextColor = "#858494"
                                    autoCapitalize = "none"
                                    onChangeText={(text) => setName(text.trim())}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: "column", paddingHorizontal: 15, marginBottom: 20}}>
                            <Text>Email</Text>
                            <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                                <AntDesign name="lock" size={24} color={primaryColor} />
                                <TextInput style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Your Email Address"
                                    placeholderTextColor = "#858494"
                                    autoCapitalize = "none"
                                    onChangeText={(text) => setEmailAddress(text.trim())}
                                />
                            </TouchableOpacity>
                        </View>

                        <Button
                            buttonStyle={styles.buttonStyle}
                            disabled={submitting}
                            title="Update Profile"
                            onPress={() => handleSubmit()}
                        />
                    </View>
                </View>  
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
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

export default UpdateProfile