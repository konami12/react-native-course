import { StyleSheet } from "react-native";
import getTypeColors from "@helpers/getTypeColors";

const Makeup = (type: string) => {
    const { background, border } = getTypeColors(type);
    return StyleSheet.create({
        cardContainer: {
            backgroundColor: "#ffffff",
            borderRadius: 10,
            borderColor: border,
            borderWidth: 1,
            width: "50%",
        },
    });
};

export default Makeup;
