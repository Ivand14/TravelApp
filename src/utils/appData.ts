import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

interface Data {
    information: string,
    image: string,
    styles: StyleProp<ImageStyle>
}

const appData: Data[] = [
    {
        information: "Aquí podrás capturar los momentos más impresionantes de tus viajes con nuestra función de fotografía integrada",
        image: 'https://i.ibb.co/rMVgxZ0/Aroundtheworld.gif',
        styles: {
            height: 300,
            width: 300,
            marginTop: 60
        }
    },
    {
        information: "Podras agregar tus propias descripciones personalizadas para recordar cada detalle.",
        image:  'https://i.ibb.co/M6Vwnnp/Directions.gif',
        styles: {
            height: 300,
            width: 300,
            marginTop: 60
        }
    }
]

export default appData;