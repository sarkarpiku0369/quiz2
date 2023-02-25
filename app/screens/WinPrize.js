import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { Feather } from '@expo/vector-icons';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';

const WinPrize = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")

    React.useEffect(() => {
        if(selectedButton != "") {
            navigation.navigate("WinSuccess")
        }
    })

  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
    <View style={globalStyles.container}>
        {/* <ScrollView> */}
            <View style={globalStyles.innerContainer}>
                <View style={globalStyles.topView}>
                    <BackButton />

                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <Text style={globalStyles.heading}>Win your prize</Text>
                    </View>
                </View>
 
                <View style={globalStyles.bottomView}>
                <View style={{alignItems:"center"}}>
                        <Text style={{color:"#2DA63D",fontSize:19,fontWeight:"700", textAlign:'center'}}>Win your prize by Selecting </Text>
                    </View>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.statustext}>1 BOX</Text>
                    </View>
                    

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20,top:40}}>
                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "1" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("1")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "2" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("2")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "3" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("3")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "4" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("4")}>
                            <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "5" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("5")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "6" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("6")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "4" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("4")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "5" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("5")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "6" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("6")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "4" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("4")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "5" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("5")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={[styles.buttonStyle, selectedButton == "6" && styles.buttonHoverStyle]} onPress={() => setSelectedButton("6")}>
                        <Feather name="gift" size={24} style={styles.buttonTextStyle} />
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

export default WinPrize
