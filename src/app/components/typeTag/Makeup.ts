import { StyleSheet } from "react-native";
import getTypeColors from "@helpers/getTypeColors";

const Makeup = (type: string) => {
    const { background, border } = getTypeColors(type);
    return StyleSheet.create({
        typeContainer: {
            backgroundColor: background,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 5,
            borderColor: border,
            borderWidth: 1,
            width: "auto",
        },
        typeLabel: {
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: 14,
            textTransform: "capitalize",
        },
    });
};

export default Makeup;
