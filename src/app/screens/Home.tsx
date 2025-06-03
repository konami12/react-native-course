import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    About: undefined;
    Home: undefined; // Add Home screen to the stack
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#272822" }}>
            <Text
                style={{
                    color: "#f92672",
                    fontSize: 40,
                    textAlign: "center",
                    padding: 10,
                    width: "80%",
                    lineHeight: 45,
                }}
            >
                Open up Home.tsx to start working on your app!
            </Text>
            <Button title="Click Me!" onPress={() => navigation.navigate("About")} />
        </View>
    );
};

export default Home;
