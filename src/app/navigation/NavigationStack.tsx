import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";

type RootStackParamList = {
    Home: undefined;
    About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: "#272822" },
                headerTintColor: "#66d9ef",
                headerTitleStyle: { fontWeight: "bold" },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
};

export default NavigationStack;
