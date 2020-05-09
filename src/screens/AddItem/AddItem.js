import React, { Component, useState, useContext } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SampleContext } from '../../provider/SampleListProvider'
import { styles } from './Styles'
import database from '@react-native-firebase/database';

const AddItem = (props) => {
    const [name, setName] = useState('')
    const items = useContext(SampleContext)
    const add = () => {
        
    }
    return (
        <View style={styles.body}>
            <View>
                <Text>Item name: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Item name"
                    value={name}
                    onChangeText={name => setName(name)}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    items.setList([...items.list, { name: name }])
                    database()
                    .ref('teste')
                    .push({ name: name })
                    props.navigation.navigate('Home')
                }}
                style={styles.addBtn}
            >
                <Text style={styles.addBtnTxt}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddItem
