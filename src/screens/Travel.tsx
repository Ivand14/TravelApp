import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import React, { useState } from 'react'
import colors from '../constants/colors'
import ImageSelector from '../components/ImageSelector/ImageSelector'
import LocationSelector from '../components/LocationSelector/LocationSelector'

interface travelInputs {
    title: string,
    description: string,
    ImageUri:string
}

const Travel = () => {

    const [travelInfo, setTravelInfo] = useState<travelInputs>({
        title: '',
        description: '',
        ImageUri:''
    })

    const handleTravelTitle = (title:string) => {
        setTravelInfo({...travelInfo,title})
    }

    const handleTravelDescription = (description:string) => {
        setTravelInfo({...travelInfo,description})
    }

    console.log(travelInfo)



    return (
        <ScrollView  style={styles.contianer}>

            <View style={styles.contianerInput}>
                <Text style={styles.title}>Captura el momento</Text>
                <TextInput
                    style={styles.input}
                    value={travelInfo.title}
                    onChangeText={handleTravelTitle}
                    placeholder='Destino'
                />
                <TextInput
                    style={styles.input}
                    value={travelInfo.description}
                    onChangeText={handleTravelDescription}
                    placeholder='Descripcion'
                />
            </View>

            {/* <ImageSelector onImage={image => setTravelInfo({...travelInfo,ImageUri:image})} /> */}
            <LocationSelector onLocation={location => console.log(location)} />

        </ScrollView>
    )
}

export default Travel

const styles = StyleSheet.create({
    contianer: {
        marginTop: 80,
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
    },
    input: {
        width: 300,
        borderColor: colors.secondary,
        borderWidth: 2,
        marginTop: 20,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center'
    },
    contianerInput: {
        alignItems:'center'
    }
})