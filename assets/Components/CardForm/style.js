import { StyleSheet, Dimensions } from "react-native";
import { Images, Colors } from "../../Utils/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width,
        height: height * 0.55,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "silver"
    },
    
});
