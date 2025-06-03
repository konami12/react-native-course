import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; // Puedes cambiar a FontAwesome, MaterialIcons, etc.

import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";

const TAB = createBottomTabNavigator();

const NavigationTab = () => {
    return (
        <TAB.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "About") {
                        iconName = focused ? "information-circle" : "information-circle-outline";
                    } else if (route.name === "HomeMain") {
                        iconName = focused ? "information-circle" : "information-circle-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <TAB.Screen title="btn1" belo-icon name="Homet" component={HomeScreen} />
            <TAB.Screen title="btn2" belo-icon name="Aboutt" component={AboutScreen} />
        </TAB.Navigator>
    );
};

export default NavigationTab;
