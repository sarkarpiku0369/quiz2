import React from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { primaryColor } from '../styles'
import axiosInstance from './utils'
import globalStyles, { buttonColor } from '../styles'
import { Text } from '@rneui/base'

const AppPrize = () => {

    const [loading, setLoading] = React.useState(false)
    const [banner, setBanner] = React.useState([])

    React.useEffect(() => {
        setLoading(true)
        axiosInstance.get("/all-banner")
        .then(response => {
            if(response.status == 200) {
                const prizes = response.data.prizes
                let prize_list = []

                for(let i = 0 ; i < prizes.length ; i++) {
                    prize_list.push({
                        img: `https://yeammi.com/banners/${prizes[i].image}`
                    })
                }

                console.log(prize_list)
                setBanner(prize_list)
                setLoading(false)
            }
        })
    }, [])

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
            <View style={[globalStyles.container, {backgroundColor: "#DCFFE0"}]}>
                <Text style={{fontSize: 18, margin: 20}}>All Prizes</Text>
                {loading ? (
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <ActivityIndicator size={"large"} color={primaryColor} />
                    </View>
                ) : (
                    <View style={{flexDirection: "row", justifyContent: "center", paddingHorizontal: 15}}>
                        <FlatList 
                            data={banner}
                            keyExtractor={item => item.id}
                            renderItem={({item, index, separators}) => (
                                <Image 
                                    source = {{uri: item.img}}
                                    style = {{ width: "100%", height: 180, resizeMode: "contain"}}
                                />
                            )}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default AppPrize