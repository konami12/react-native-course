import { StyleSheet } from "react-native";
import getTypeColors from "@helpers/getTypeColors";

const Makeup = (type: string) => {
    const { border } = getTypeColors(type);
    return StyleSheet.create({
        footerContainer: {
            paddingBottom: 10,
            paddingTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            borderTopColor: border,
            borderTopWidth: 1,
            flexWrap: "wrap",
        },
    });
};

export default Makeup;
