import { GET_TRAVEL } from "../actions/getTravel";

interface Coords {
    lat: number | null,
    lng: number | null
}

interface TravelData {
    title: string,
    description: string,
    imageUri: string,
    coords: Coords
}

const initialState: TravelData = {
    title: '',
    description: '',
    imageUri: '',
    coords: {
        lat: 0,
        lng: 0
    }
}

interface Action {
    type:string,
    payload?:any
}

const travelReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case GET_TRAVEL:
            return{
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                imageUri: action.payload.ImageUri,
                coords: action.payload.coords,
            }
    
        default:
            return state
    }
}

export default travelReducer