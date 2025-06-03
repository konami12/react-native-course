import { Text, TouchableOpacity } from "react-native";

import Makeup from "./Makeup";

interface TypeTagProps {
    handle?: (e: string) => void;
    type?: string;
}

const TypeTag = ({ handle = (arg) => {}, type = "" }: TypeTagProps) => {
    const { typeContainer, typeLabel } = Makeup(type);
    return (
        <TouchableOpacity style={typeContainer} onPress={() => handle(type)}>
            <Text style={typeLabel}>{type}</Text>
        </TouchableOpacity>
    );
};

export default TypeTag;
