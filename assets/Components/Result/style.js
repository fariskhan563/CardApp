import { StyleSheet, Dimensions } from "react-native";
import { Images, Colors } from "../../Utils/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: height * 0.08,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    numContainer: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: width * 0.02,
        backgroundColor: Colors.primary
    },
    numText: {
        fontSize: width * 0.05,
        color: Colors.secondary
    },
    nameContainer: {
        width: width * 0.5,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    nameText: {
        fontSize: width * 0.06,
        marginLeft: width * 0.02,
        color: "#8A8A8A"
    },
});
