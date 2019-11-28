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
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoWrapper: {
        width: width * 1,
        height: width * 1,
        borderRadius: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(168, 21, 21, 0.7)',
    },
    logoImage: {
        width: "70%",
        height: "70%"
    },
    textWrapper: {
        width,
        height: height * 0.2,
        marginTop: height * 0.04,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    infoText: {
        width: "95%",
        height: height * 0.1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textHeading: {
        fontSize: width * 0.075,
        color: Colors.secondary
    },
    text: {
        textAlign: 'center',
        fontSize: width * 0.06,
        color: Colors.secondary
    },
    btnContainer: {
        width,
        height: height * 0.15,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    btnWrapper: {
        width: width * 0.25,
        height: height * 0.06,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.secondary
    },
    btnText: {
        textAlign: 'center',
        fontSize: width * 0.05,
        color: Colors.text
    },
});
