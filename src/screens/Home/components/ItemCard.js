import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Styles'

const ItemCard = (props) => {
    const {item} = props
    return (
        <View style={styles.itemCard}>
            <Text>{item.name}</Text>
        </View>
    )

}

export default ItemCard