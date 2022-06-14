import React, {FC} from "react";
import {ImageBackground, StyleSheet, Text, TouchableHighlight, View} from "react-native";

interface KachelProps {
    children: JSX.Element[] | JSX.Element
    title: string,
    kachelName: string,
    picPath?: string
}

const Kachel: FC<KachelProps> = (props) => {

    return (
        <TouchableHighlight activeOpacity={0.5}
                            underlayColor="#DDDDDD"
                            onPress={() => alert(props.kachelName + ' Kachel pressed')}
                            style={styles.container}>
            { props.picPath ? <ImageBackground source={props.picPath}
                             resizeMode="cover"
                             style={styles.image}
                             imageStyle={styles.imageStyle}/> :
                             <Text>{props.title}</Text> }
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderStyle: 'solid',
        elevation: 10,
        width: '50%',
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 2,
        shadowColor: '#000'
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    imageStyle: {
        borderRadius: 20,
        width: '107%',
        height: '106%',
        marginLeft: -5,
        marginTop: -5
    }
})

export default Kachel;
