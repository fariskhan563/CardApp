import { StyleSheet, Dimensions } from "react-native";
import { Images, Colors } from "../../Utils/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    backgroundWrapper: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        backgroundColor: Colors.primary,
    },

    mainWrapper: {
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logoWrapper: {
        width: width * 0.35,
        height: height * 0.15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: "100%",
        height: "100%"
    },
    headingWrapper: {
        width: width * 0.8,
        height: height * 0.1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: width * 0.09,
        fontWeight: "400",
        letterSpacing: width * 0.005,
        color: Colors.secondary
    },
    loaderWrapper: {
        width,
        height: height * 0.1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
});

