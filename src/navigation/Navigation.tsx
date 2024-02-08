import MyTabs from './BottomTabs';
import React from 'react';
import Welcome from '../screens/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator  initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
            <Stack.Screen name='HomeScreen' component={MyTabs} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default Navigation;