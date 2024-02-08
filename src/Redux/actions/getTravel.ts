export const GET_TRAVEL: string = 'GET_TRAVEL'

interface Coords {
    lat: number,
    lng: number
}

interface TravelData {
    title: string,
    description: string,
    imageUri: string,
    coords: Coords
}

const getTravel = ({ data }: { data: TravelData }) => ({
    type: GET_TRAVEL,
    payload: data
})


export default getTravel