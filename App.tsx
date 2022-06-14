import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import KachelRow from "./components/UI/KachelRow";
import Kachel from "./components/Kacheln/Kachel";

export default function App() {

    const picArray = {
        isaPath: "",
        toniPath: require("./assets/ToniWKleiner.jpg"),
        miriPath: "",
        elternPath: "",
        wohnungPath: "",
        gartenPath: "",
    }

    return (
        <View style={styles.container}>
            <KachelRow>
                <Kachel title="Isa" kachelName="First">

                </Kachel>

                <Kachel title="Toni" kachelName="Second" picPath={picArray.toniPath}>

                </Kachel>
            </KachelRow>
            <KachelRow>
                <Kachel title="Miri" kachelName="Third">

                </Kachel>

                <Kachel title="Eltern" kachelName="Fourth">

                </Kachel>
            </KachelRow>
            <KachelRow>
                <Kachel title="Wohnung" kachelName="Fifth">

                </Kachel>

                <Kachel title="Garten" kachelName="Sixth">

                </Kachel>
            </KachelRow>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginTop: 20
    }
});
