import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import ImageSelector from '../components/ImageSelector/ImageSelector'
import LocationSelector from '../components/LocationSelector/LocationSelector'
import colors from '../constants/colors'

interface Coords {
    lat: number | null,
    lng: number | null
}

interface travelInputs {
    title: string,
    description: string,
    ImageUri: string,
    coords: Coords
}

const Travel = () => {

    const [travelInfo, setTravelInfo] = useState<travelInputs>({
        title: '',
        description: '',
        ImageUri: '',
        coords: {
            lat: null,
            lng: null
        }
    })

    const handleTravelTitle = (title: string) => {
        setTravelInfo({ ...travelInfo, title })
    }

    const handleTravelDescription = (description: string) => {
        setTravelInfo({ ...travelInfo, description })
    }

    console.log(travelInfo)



    return (
        <ScrollView style={styles.contianer}>

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

            <ImageSelector onImage={image => setTravelInfo({ ...travelInfo, ImageUri: image })} />
            <LocationSelector onLocation={location => setTravelInfo({ ...travelInfo, coords: location })} />
            
            <View style={styles.containerData}>
                {travelInfo.coords && travelInfo.ImageUri && <TouchableOpacity style={styles.Button}>
                    <Text style={styles.textButton}>Guradar</Text>
                </TouchableOpacity>}
            </View>

        </ScrollView>
    )
}

export default Travel

const styles = StyleSheet.create({
    contianer: {
        marginTop: 80,
        flexDirection: 'column',
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
        alignItems: 'center'
    },
    textButton: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: colors.secondary,
        width: 380,
        padding: 15,
        borderRadius: 20,
        borderColor: colors.secondary,
        borderWidth: 1,
        marginTop: 20
    },
    containerData: {
        alignItems: 'center'
    }
})