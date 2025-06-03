import { View } from "react-native";
import Makeup from "./Makeup";

import TypeTag from "@components/typeTag";

interface PropsFooter {
    types: Array<string>;
    id: string;
}

const Footer = ({ types, id }: PropsFooter) => {
    const { footerContainer } = Makeup(types[0]);
    return (
        <View style={footerContainer}>
            {types.map((type: string) => (
                <TypeTag key={`${type}-${id}`} type={type} />
            ))}
        </View>
    );
};

export default Footer;
