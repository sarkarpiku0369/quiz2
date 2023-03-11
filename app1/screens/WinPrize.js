import React from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'
import { Button } from '@rneui/base';
import SafeAreaView from 'react-native-safe-area-view'
import globalStyles, { buttonColor } from '../styles'
import { Feather } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import { StoreContext } from '../App';
import axiosInstance from './utils';

const WinPrize = ({navigation}) => {
    const [selectedPrize, setSelectedPrize] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const {state, setState} = React.useContext(StoreContext)
    const [prizes, setPrizes] = React.useState(null)
    
    React.useEffect(() => {
        if(selectedPrize) {
            setState(state => ({...state, prizeSelected: true}))
            navigation.navigate("WinSuccess", {item: selectedPrize})
        }
    }, [selectedPrize])

    React.useEffect(() => {
        setLoading(true)
        axiosInstance.get("/all-prize")
        .then(response => {
            if(response.status == 200) {
                setPrizes(response.data.prizes)
                console.log(response.data.prizes)
                setLoading(false)
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
                        <Text style={globalStyles.heading}>Win your prize</Text>
                    </View>
                </View>
 
                <View style={globalStyles.bottomView}>
                <View style={{alignItems:"center"}}>
                        <Text style={{color:"#2DA63D",fontSize:19,fontWeight:"700", textAlign:'center'}}>Win your prize by Selecting </Text>
                    </View>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.statustext}>{state.prizeSelected ? "You Have Selected Your Prize" : "1 Box"}</Text>
                    </View>
                    

                    <FlatList 
                        data={prizes}
                        numColumns={3}
                        keyExtractor={item => item.id}
                        renderItem={({item, index, separators}) => (
                            <Button 
                                disabled={state.prizeSelected}
                                disabledStyle={{backgroundColor: "red"}}
                                buttonStyle={[styles.buttonStyle, {margin: 25, marginBottom: 10}]}
                                onPress={() => setSelectedPrize(item)}>
                                {state.prizeSelected ? (
                                    <Feather name="lock" size={24} color="white" />
                                ) : (
                                    <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                                )}
                            </Button>
                        )}
                    />
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
