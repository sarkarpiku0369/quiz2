import React from 'react'
import { View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { primaryColor } from '../styles';

const CircularProgressIndicator = ({navigation, level}) => {

    console.log({level})
    let levelName  = ""

    if(level == 1) {
        levelName = "One"
    }
    else if(level == 2) {
        levelName = "Two"
    }
    else if(level == 3) {
        levelName = "Three"
    }
    else if(level == 4) {
        levelName = "Four"
    }
    else {
        levelName = "Five"
    }


    const [focus, setFocus] = React.useState(true)
    const [timerId, setTimerId] = React.useState(null)

    React.useEffect(() => {
        navigation.addListener("blur", () => {setFocus(false)})

        const id = setTimeout(() => {
            if(focus)
                navigation.navigate(`Level${levelName}QuestionScreen`)
        }, 10000)

        setTimerId(id)

    }, [navigation])

    React.useEffect(() => {
        console.log(focus)
        clearTimeout(timerId)
    }, [focus])


    return (
        <View style={{flexDirection: "row", justifyContent: "center"}}>
            <CircularProgress
                value={0}
                radius={50}
                maxValue={10}
                initialValue={10}
                progressValueColor={primaryColor}
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                duration={10000}
                title={'Second'}
                titleColor={primaryColor}
                titleStyle={{fontWeight: 'bold'}}
                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                strokeColorConfig={[
                    { color: 'red', value: 0 },
                    { color: 'yellowgreen', value: 6 },
                    { color:  primaryColor, value: 10 },
                ]}
            />
        </View>
    )
}

export default CircularProgressIndicator