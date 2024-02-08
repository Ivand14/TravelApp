import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

interface Coords {
    lat: number | null,
    lng: number | null
}

interface AppState {
    travel: {
        title: string,
        description: string,
        imageUri: string,
        coords: Coords
    }
}



const HomeScreen = () => {

    const travelData = useSelector((state: AppState) => state.travel)

    console.log('travel', travelData.imageUri)

    return (
        <View style={styles.container}>
            <Text>{travelData.title}</Text>
            <Image source={{ uri: travelData.imageUri }} style={styles.image} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        marginTop: 60,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    }
})