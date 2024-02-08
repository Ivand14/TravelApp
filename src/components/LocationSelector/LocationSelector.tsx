import * as Location from 'expo-location'

import { Alert, View } from 'react-native'
import React, { useState } from 'react'

import MapPreview from './MapPreview'

interface location {
    lat:number,
    lng:number
}

const LocationSelector = ({onLocation}:{onLocation:(location:any) => void}) => {

    const [pickedLocation, setPickedLocation] = useState<location>()

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permisos Insuficientes',
                'Necesitas dar tu localizacion para utilizar la aplicacion',
                [{ text: 'Ok' }]
            )

            return false
        }

        return true

    }

    const handlerLocation = async () => {
        const isLocationOk = await verifyPermissions()
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

    }


    return (
        <View>
            <View>
                <MapPreview location={pickedLocation} handlerLocation={handlerLocation} />
            </View>
        </View>
    )
}

export default LocationSelector

