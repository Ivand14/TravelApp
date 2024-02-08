import { Alert, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import colors from '../../constants/colors'

const ImageSelector = ({ onImage }: { onImage: (uri: string) => void }) => {

    const [pickedUri, setPickedUri] = useState<string>('')

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos a la camara para usar la aplicacion',
                [{ text: 'Ok' }]
            )
            return false
        }

        return true
    }

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        if (image.assets) {
            setPickedUri(image.assets[0].uri)
            onImage(image.assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {
                    !pickedUri ? <Text>No hay ninguna imagen</Text> : <Image source={{ uri: pickedUri }} style={styles.image} />
                }
            </View>
            <TouchableOpacity style={styles.Button} onPress={handleTakeImage}>
                <Text style={styles.textButton}>Tomar Foto</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems:'center'
    },
    preview: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.secondary,
        borderWidth: 2,
        height: 300,
        width: 400,
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation:5
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
    image: {
        width: 399,
        height: 299,
        borderRadius: 20,
        padding: 10
    }
})