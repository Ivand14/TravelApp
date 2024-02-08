import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Maps from '../../constants/Maps'
import React from 'react'
import colors from '../../constants/colors'

const MapPreview = ({ location, handlerLocation }: { location: any, handlerLocation: () => void }) => {

    console.log(location)

    const MapPreviewUrl = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C${location.lat},${location.lng}
    &key=${Maps.API_KEY}` : ''

    return (
        <View style={styles.container}>
            {location ? (
                <Image style={styles.mapImage} source={{ uri: MapPreviewUrl }} />
            ) : (
                <Text>Selecciona una ubicacion!</Text>
            )}
            <TouchableOpacity style={styles.Button} onPress={handlerLocation}>
                <Text style={styles.textButton}>Obtener Ubicacion</Text>
            </TouchableOpacity>
        </View>

    );

}

export default MapPreview

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: 300,
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
})

