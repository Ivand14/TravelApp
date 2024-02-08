import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import colors from '../constants/colors'

const HomeScreen = () => {
    
    return (
        <View style={styles.container}>
            <Text>Esta es la home</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 60,
        backgroundColor: colors.primary,
        alignItems: 'center'
    },
})