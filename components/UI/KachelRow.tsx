import React, {FC} from "react";
import {StyleSheet, View} from "react-native";
import {Props} from '../../global/globalProps';

const KachelRow: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 5
    }
})

export default KachelRow;
