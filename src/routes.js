import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/Home'
import AddItem from './screens/AddItem/AddItem'
import { NavigationContainer } from '@react-navigation/native';
import { SampleProvider } from './provider/SampleListProvider'
const Stack = createStackNavigator();

export default function App() {
    return (
        <SampleProvider>
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="none"
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="AddItem" component={AddItem} />
                </Stack.Navigator>
            </NavigationContainer>
        </SampleProvider>

    );
}