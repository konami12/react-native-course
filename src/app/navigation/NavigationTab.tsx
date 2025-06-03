import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExtraScreen from "../screens/Extra";
import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";

type RootTabParamList = {
    Home: undefined;
    About: undefined;
    Extra: undefined; // Add Extra screen to the stack
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const NavigationTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#272822" },
                headerTintColor: "#66d9ef",
                headerTitleStyle: { fontWeight: "bold" },
            }}
        >
            <Tab.Screen
                name="Extra"
                component={ExtraScreen}
                options={{
                    tabBarLabel: "Extras",
                    tabBarIcon: ({ color, size }) => <Ionicons name="balloon" color={color} size={size} />,
                }}
            />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
};

export default NavigationTab;
