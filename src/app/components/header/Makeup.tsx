import { StyleSheet } from "react-native";
import getTypeColors from "@helpers/getTypeColors";

const Makeup = (type: string) => {
    const { background, border } = getTypeColors(type);
    return StyleSheet.create({
        headerContainer: {
            backgroundColor: background,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            borderBottomColor: border,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderBottomWidth: 1,
            boxSizing: "border-box",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        headerName: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 16,
        },
        headerSpecie: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 11,
        },
        headerMumber: {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 12,
        },
    });
};

export default Makeup;
