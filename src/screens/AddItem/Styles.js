import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: width*0.6,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8
    },
    addBtn: {
        width: width*0.4,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#63bf7c',
        marginTop: 24
    },
    addBtnTxt: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export { styles }