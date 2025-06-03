import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NavigationStack from "./navigation/NavigationStack";
import NavigationTab from "./navigation/NavigationTab";

import Card from "@components/card";

export default function App() {
    const data = [
        {
            id: "088",
            name: "Grimer",
            species: "Sludge Pokémon",
            types: ["Poison"],
            img: "http://orcapracticas-api-pokemon.glitch.me/pokemons/grimer.jpg",
        },
        {
            id: "118",
            name: "Goldeen",
            species: "Goldfish Pokémon",
            types: ["Water", "Fire", "Electric"],
            img: "http://orcapracticas-api-pokemon.glitch.me/pokemons/goldeen.jpg",
        },
    ];

    return (
        <View style={styles.container}>
            {data.map((pokemon) => (
                <Card {...pokemon} key={`pokemon-${pokemon.id}`} />
            ))}
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
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
