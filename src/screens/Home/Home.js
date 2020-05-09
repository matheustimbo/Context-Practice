import React, { useEffect, useContext } from 'react'
import { ScrollView, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './Styles'
import { SampleContext } from '../../provider/SampleListProvider'
import ItemCard from './components/ItemCard'
import AddBtn from './components/AddBtn'
import database from '@react-native-firebase/database';

const Home = (props) => {

    const items = useContext(SampleContext)
    useEffect(()=>{
        database()
        .ref('teste')
        .once('value')
        .then(snapshot=>{
            let itemsAux = []
            snapshot.forEach(item=>{
                itemsAux.push(item.val())
            })
            items.setList(items.list.concat(itemsAux))
        })
    },[])

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'flex-end' }}>
            <AddBtn onPress={() => { props.navigation.navigate('AddItem') }} />
            <ScrollView style={{ flex: 1 }}>
                {items.list.map(item => {
                    return (
                        <ItemCard item={item} />
                    )
                }
                )}

            </ScrollView>
            
        </SafeAreaView>

    )
}

export default Home;