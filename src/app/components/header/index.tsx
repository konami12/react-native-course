import { View, Text } from "react-native";
import Makeup from "./Makeup";

interface PropsHeader {
    name: string;
    species: string;
    id: string;
    type: string;
}

const Header = ({ name = "Nombre", species = "Especie de pokemon", id = "", type = "" }: PropsHeader) => {
    const { headerContainer, headerName, headerSpecie, headerMumber } = Makeup(type);
    return (
        <View style={headerContainer}>
            <View>
                <Text style={headerName}>{name}</Text>
                <Text style={headerSpecie}>{species}</Text>
            </View>
            <Text style={headerMumber}>#{id.padStart(3, "0")}</Text>
        </View>
    );
};

export default Header;
