import { Button, Text } from '@rneui/base'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { primaryColor, secondaryColor } from '../styles'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Splash1 = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
            <View style={styles.container}>
                <View style={{flexDirection: "row", justifyContent: "flex-end", height: 80, marginTop: 10}}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/oval_left.png")}
                    />
                </View>
                <View style={styles.top}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/splash1.png")}
                    />
                    <Text style={{fontSize: 24, fontWeight: "bold", color: "#001833", marginTop: 95}}>Get to the next Level with the</Text>
                    <Text style={{fontSize: 24, fontWeight: "bold", color: "#001833"}}>answer to the puzzle </Text>
                    
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <View style={{backgroundColor: "yellow", padding: 5, borderRadius: 50, borderColor: primaryColor, borderWidth: 2}}>    
                        </View>
                        <View style={{backgroundColor: primaryColor, padding: 5, borderRadius: 50, borderColor: primaryColor, borderWidth: 2, marginLeft: 5}}>    
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-start", position: "absolute", bottom: 0}}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/oval_right.png")}
                        
                    />
                </View>
                <View style={styles.bottom}>
                    <Button 
                        buttonStyle={{width: 100, height: 43, borderRadius: 10, backgroundColor: secondaryColor, borderColor: primaryColor, borderWidth: 1}}
                        titleStyle={{color: primaryColor}}
                        title={"Next"}
                        onPress={() => navigation.navigate("Splash2")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: secondaryColor
    },
    top: {
        flex: 0.8,
        justifyContent: "center",
        paddingHorizontal: 14,
        alignItems: "center",
    },
    bottom: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
    }
})

export default Splash1