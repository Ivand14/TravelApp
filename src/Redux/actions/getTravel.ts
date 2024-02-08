export const GET_TRAVEL: string = 'GET_TRAVEL'

import * as FileSystem from 'expo-file-system'

interface Coords {
    lat: number | null,
    lng: number | null
}

interface TravelData {
    title: string,
    description: string,
    ImageUri: string,
    coords: Coords
}

const getTravel = ({ data }: { data: TravelData }) => {
    console.log('reducer', data);

    return async (dispatch: any) => {

        
        const fileName = data.ImageUri ? data.ImageUri.split('/').pop() : ''
        const directory = FileSystem.documentDirectory ? FileSystem.documentDirectory : '';
        const path = directory + fileName;

        

        console.log(path)

        try {
            if(path !== null && path !== undefined){
                FileSystem.moveAsync({
                    from: data.ImageUri,
                    to: path
                })
            }
        } catch (error) {
            console.log(error)
        }

        dispatch({
            type: GET_TRAVEL,
            payload: {
                title: data.title,
                description: data.description,
                ImageUri: path,
                coords: data.coords
            }
        })

    }
}



export default getTravel