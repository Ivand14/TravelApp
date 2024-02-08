import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const BestTravels = () => {
    return (
        <View style={styles.contianer}>
            <Text>BestTravels</Text>
        </View>
    )
}

export default BestTravels

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})