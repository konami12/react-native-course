import { TouchableOpacity, Image } from "react-native";
import Makeup from "./Makeup";

interface PropsPoster {
    img?: string;
    name: string;
}

const Poster = ({ img = "", name = "Pokemon" }: PropsPoster) => {
    const { posterContainer, posterImg } = Makeup;
    const POSTER = img ? { uri: img } : require("@assets/default.png");
    return (
        <TouchableOpacity style={posterContainer}>
            <Image source={POSTER} style={posterImg} alt={`Pokemon ${name}`} />
        </TouchableOpacity>
    );
};

export default Poster;
