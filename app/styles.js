import { StyleSheet } from "react-native";

export const primaryColor = "#28A038";
export const secondaryColor = "#DCFFE0";
export const buttonColor = "#3AB54A";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    topView: {
        flex: 0.2,
        backgroundColor: primaryColor,
        padding: 14
    },
    bottomView: {
        flex: 0.8,
        padding: 14,
        backgroundColor: secondaryColor,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 38
    },
    // Default flexDirection = column
    // justifyContent alaways follows the axis of flexDirection (flexDirection = row means justifyContent = row)
    // alignItems  alaways follows the opposite axis of flexDirection (flexDirection = row means alignItems = column)
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        color: "white",
        top:15,
    },
    heading: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    description: {
        color: primaryColor,
        fontSize: 16,
        // fontWeight: "bold"
    },
    statustext: {
        color: 'red',
        fontSize: 16,
        fontWeight: "bold"
    },
    answerButton: {
        containerStyle: {
            paddingVertical: 10
        },
        buttonStyle: {
            backgroundColor: buttonColor,
            paddingVertical: 10,
            borderRadius: 8,
        }
    }
})

export default styles