import React from "react";
import { Text, SafeAreaView, Button } from "react-native";

const About = (props) => {
    const { navigation } = props;
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>About Screen</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>Welcome to the About Screen!</Text>
            <Button
                title="Go Back to Home"
                onPress={() => {
                    // Assuming you have a navigation prop, you can use it to go back
                    // navigation.goBack();
                    navigation.navigate("Home");
                }}
                color="#841584"
            />
        </SafeAreaView>
    );
};

export default About;
