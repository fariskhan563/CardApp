import React from "react";
import { View, TextInput, Image, Text, } from "react-native";
import { withNavigation } from "react-navigation";
import { Images, Colors } from "../../Utils/index";
import styles from "./style";

const Result = props => {
    const { result } = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.numContainer}>
                <Text style={styles.numText}>{result.number}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{result.bankName}</Text>
            </View>
        </View>
    );

}

export default withNavigation(Result);
