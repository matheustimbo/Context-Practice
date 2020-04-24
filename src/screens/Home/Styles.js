import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    itemCard: {
        width: width*0.8,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 6,
        padding: 8,
        marginTop: 16,
        marginHorizontal: width*0.1
    },
    addBtn: {
        width: 120,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#004290',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginRight: 16 
    },
    addBtnTxt: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export { styles }