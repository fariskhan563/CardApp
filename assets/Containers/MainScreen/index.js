import React from "react";
import { View, ActivityIndicator, Image, Text } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./style";

class MainScreen extends React.Component {
  render() {
    return (


      <View>
        <Text>Main Screen</Text>
      </View>

    );
  }
}

export default withNavigation(MainScreen);
