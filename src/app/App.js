import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NavigationStack from "./navigation/NavigationStack";
import NavigationTab from "./navigation/NavigationTab";
import NavigationDrawer from "./navigation/NavigationDrawer";

export default function App() {
    return (
        <NavigationContainer>
            {/* <NavigationStack /> */}
            {/* <NavigationTab /> */}
            <NavigationDrawer />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});
