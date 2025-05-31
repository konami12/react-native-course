import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/3249830.jpeg")} style={{ width: 100, height: 100 }} />
            <Text>{name}</Text>
            <StatusBar style="auto" />
            <Button
                title="Change Name"
                onPress={() => {
                    setName("John Doe");
                }}
            />
        </View>
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
