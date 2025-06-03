import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NavigationStack from "./navigation/NavigationStack";
import NavigationTab from "./navigation/NavigationTab";

export default function App() {
    return (
        <NavigationContainer>
            <NavigationTab />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272822",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#66d9ef",
        fontSize: 40,
        textAlign: "center",
        padding: 10,
        width: "80%",
        lineHeight: 45,
    },
});
