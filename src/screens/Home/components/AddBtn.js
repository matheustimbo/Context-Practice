import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Styles'

const AddBtn = (props) => {
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.addBtn}
        >
            <Text style={styles.addBtnTxt}>ADD ITEM</Text>
        </TouchableOpacity>
    )
}

export default AddBtn