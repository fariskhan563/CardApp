import React from "react";
import { View, ActivityIndicator, Image, Text, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";
import { Images, Colors } from "../../Utils/index";
import styles from "./style";

class WelcomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { navigate } = this.props;
      setTimeout(() => {
          navigate("MainStack");
      }, 3000);
    }

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

          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>TIDE CARD APP</Text>
          </View>

          <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>

        </View>
      </ImageBackground>

    );
  }
}

export default withNavigation(WelcomeScreen);
