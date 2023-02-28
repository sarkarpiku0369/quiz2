import { View,Text,StyleSheet,Image } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import {primaryColor}  from "../../styles";
import { Button } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from "../../styles";
import { Entypo } from '@expo/vector-icons'; 
import React from 'react';

const Main = ({navigation}) => {
    
    return(
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, justifyContent: "center"}}>
            <View style={{flex: 0.6, justifyContent: "center", alignItems: "center"}}>
                <Image 
                    source={require("../../assets/Woman-main.png")}
                />
            </View>
            <View style={styles.main}>
                    <View style={{justifyContent: 'center', alignItems: "center", marginBottom: 15}}>
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Login or Sign Up </Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: "center", paddingHorizontal: 30, marginBottom: 20}}>
                        <Text>Log in or create an account to take quiz</Text>
                        <Text>take part in challenge,and more</Text>
                    </View>

                    <Button 
                        buttonStyle={styles.submitButton}
                        title="Sign In"
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button 
                        buttonStyle={styles.submitButtoncreate}
                        title="Create an account"
                        titleStyle={{color: "#3AB54A"}}
                        onPress={() => navigation.navigate("Registration")}
                    />
            </View>
           
         </View>
    </SafeAreaView>
    );
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
     submitButtoncreate: {
        backgroundColor: '#dfdfdf',
        padding: 10,
        margin: 15,
        height: 60,
        color:primaryColor,
        borderRadius: 100
     },
     share:{
        color: primaryColor,
        marginLeft:20,
     },
     main:{
        flex: 0.5,
        backgroundColor: "white",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection:"column",
       // backgroundColor:"green",
     }
})
export default Main;