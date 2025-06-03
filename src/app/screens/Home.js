import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

const Home = (props) => {
    const { navigation } = props;
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home Screen</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>Welcome to the Home Screen!</Text>
            <Button
                title="Go to About"
                onPress={() => {
                    navigation.navigate("About");
                }}
                color="#841584"
            />
        </SafeAreaView>
    );
};

export default Home;
