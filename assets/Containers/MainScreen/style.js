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
        paddingBottom: height * 0.05,
        backgroundColor: "silver"
      },
      btnContainer:{
          width: width * 0.8,
          height: height * 0.1,
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
        width: width * 0.2,
        height: width * 0.2,
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
    }
});
