import { StyleSheet, Dimensions } from "react-native";
import { Images, Colors } from "../../Utils/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width,
        height: height * 0.65,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    topContainer: {
        width,
        height: height * 0.2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    itemWrapper: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    itemText: {
        fontSize: width * 0.05,
        color: Colors.secondary
    },
    imgWrapper: {
        width: width * 0.7,
        height: height * 0.2,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    cardImage: {
        width: width * 0.5,
        height: height * 0.18,
        marginLeft: width * 0.03
    },
    formWrapper: {
        width,
        height: height * 0.45,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    inputWrapper: {
        width: width * 0.8,
        height: height * 0.08,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#8A8A8A",
        marginBottom: height * 0.008,
    },
    labelWrapper: {
        width: width * 0.8,
        height: height * 0.025,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    labelText: {
        fontSize: width * 0.035,
        color: "#8A8A8A"
    },
    inputBox: {
        width: "100%",
        height: height * 0.055,
        fontSize: width * 0.05,
        color: Colors.text,
      },
});
