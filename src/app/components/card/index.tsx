import { View, Image } from "react-native";

import Header from "@components/header";
import Poster from "@components/poster";
import Footer from "@components/footer";

import Makeup from "./Makeup";

interface PropsCard {
    id?: string;
    name?: string;
    species?: string;
    types?: Array<string>;
    img?: string;
}

const Card = ({
    name = "Nombre",
    species = "Especie de pokemon",
    id = "0",
    types = ["Type", "Tag"],
    img = "",
}: PropsCard) => {
    const [type] = types;
    const { cardContainer } = Makeup(type);
    return (
        <View style={cardContainer}>
            <Header name={name} species={species} id={id} type={type} />
            <Poster img={img} name={name} />
            <Footer types={types} id={id} />
        </View>
    );
};

export default Card;
