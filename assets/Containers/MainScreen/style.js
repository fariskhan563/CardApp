import { StyleSheet, Dimensions } from "react-native";
import { Images, Colors } from "../../Utils/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width,
        height,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerContainer: {
        width,
        height: height * 0.12,
        marginTop: height * 0.04,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    logoContainer: {
        width: "25%",
        height: height * 0.12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: width * 0.18,
        height: height * 0.11,
    },
    titleContainer: {
        width: "75%",
        height: height * 0.12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    titleText: {
        fontSize: width * 0.06,
        color: Colors.secondary,
        marginLeft: width * 0.14,
    },
    formContainer: {
        width,
        display: "flex",
        alignItems: "center",
        paddingBottom: height * 0.1,
    },
    btnContainer: {
        width: width * 0.8,
        height: height * 0.07,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    btnText: {
        fontSize: width * 0.06,
        color: Colors.secondary,
    },
    addContainer: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: 100,
        marginBottom: height * 0.01,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    addImage: {
        width: width * 0.16,
        height: height * 0.05,
    },
    KeyboardAvoidingView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },


    popupWrapper: {
        width,
        height,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    popUp: {
        width: "75%",
        height: "60%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        marginTop: height * 0.1
    },
    popUpHeader: {
        width: "90%",
        height: height * 0.08,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#8A8A8A",
        marginTop: height * 0.025,
    },
    popUpHeading:{
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    headingText: {
        fontSize: width * 0.06,
        marginRight: width * 0.1,
        color: "#8A8A8A"
    },
    iconWrapper: {
        width: "20%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    crossIcon: {
        fontWeight: "bold",
        fontSize: width * 0.07,
        color: Colors.text
    },
    popUpResults:{
        width: "90%",
        height: "80%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: height * 0.01,
    }
});
