import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons"; // Puedes cambiar a FontAwesome, MaterialIcons, etc.

import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen title="btn1" belo-icon name="Home" component={HomeScreen} />
            <Drawer.Screen title="btn2" belo-icon name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
};

export default NavigationDrawer;
