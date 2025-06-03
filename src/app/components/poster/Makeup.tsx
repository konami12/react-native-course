import { StyleSheet } from "react-native";

const Makeup = StyleSheet.create({
    posterContainer: {
        width: "100%",
        height: 150,
        padding: 5,
        display: "flex",
        alignItems: "center",
    },
    posterImg: {
        width: "70%",
        height: "auto",
        aspectRatio: 1,
        objectFit: "contain",
    },
});

export default Makeup;
