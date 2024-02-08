import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import Slider from '../components/Slider/Slider'
import colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <Slider />

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('HomeScreen' as never)}>
                    <Text style={styles.textButton}>Empezar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        width: '100%',
        marginTop:50
    },
    colorText: {
        color: colors.terciary
    },
    buttons: {
        margin: 20
    },
    containerButtons: {
        marginTop: 5,
        gap: 30,
        alignItems: 'center',
    },
    textButton: {
        color: colors.primary,
        fontSize: 20,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: colors.terciary,
        width: 380,
        padding: 15,
        borderRadius: 20,
        borderColor: colors.terciary,
        borderWidth: 1
    }
})