import BestTravels from '../screens/BestTravels';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons'
import Travel from '../screens/Travel';
import colors from '../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                margin: 7,
                borderRadius: 50,
                backgroundColor: '#FFFFF0'
            },
            tabBarHideOnKeyboard:true
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicons color={colors.secondary} name='home' size={30} />
                ),
                tabBarLabel: () => null
            }} />
            
            <Tab.Screen name="Travel" component={Travel} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicons color={colors.secondary} name='airplane' size={30} />
                ),
                tabBarLabel: () => null
            }} />
            
            <Tab.Screen name="Favorites" component={BestTravels} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicons color={colors.secondary} name='heart' size={30} />
                ),
                tabBarLabel: () => null
            }} />
        </Tab.Navigator>
    );
}

export default MyTabs
