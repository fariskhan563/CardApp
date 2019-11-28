import React from "react";
import { View, TouchableOpacity, Image, Text, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";
import { Images, Colors } from "../../Utils/index";
import styles from "./style";

class InfoScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={Images.background} style={styles.backgroundWrapper}
        imageStyle={{ opacity: 0.3 }}>
        <View style={styles.mainWrapper}>

          <View style={styles.logoWrapper}>
            <Image
              source={Images.logo}
              style={styles.logoImage}
            />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textHeading}>CARD DETAILS</Text>
            <View style={styles.infoText}>
              <Text style={styles.text}>
                Enter multiple card details and get best credit card recommended!
            </Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnWrapper} onPress={() => {
              this.props.navigate("MainScreen");
            }}>
              <Text style={styles.btnText}>NEXT</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    );
  }
}

export default withNavigation(InfoScreen);
