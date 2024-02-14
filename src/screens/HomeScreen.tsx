import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore'

import { db } from '../../config/Firebase'
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

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'travels'));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        };
        getUsers();
    }, []);



    return (
        <View style={styles.container}>
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