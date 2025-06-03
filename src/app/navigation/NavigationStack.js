import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";

const STOCK = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <STOCK.Navigator initialRouteName="HomeMain">
            <STOCK.Screen name="HomeMain" component={HomeScreen} />
            <STOCK.Screen name="AboutMain" component={AboutScreen} />
        </STOCK.Navigator>
    );
};

export default NavigationStack;
