import React, { useEffect, useContext } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import { SampleContext } from '../../provider/SampleListProvider'
import ItemCard from './components/ItemCard'
import AddBtn from './components/AddBtn'

const Home = (props) => {

    const items = useContext(SampleContext)

    return (
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <AddBtn onPress={() => { props.navigation.navigate('AddItem') }} />
            <ScrollView style={{ flex: 1 }}>
                {items.list.map(item => {
                    return (
                        <ItemCard item={item} />
                    )
                }
                )}

            </ScrollView>
            
        </View>

    )
}

export default Home;