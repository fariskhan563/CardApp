import React from "react";
import { View, ActivityIndicator, Image, Text } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./style";

class MainScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { navigate, user } = this.props;
//     setTimeout(() => {
//       if (user) {
//         navigate("AppStack");
//       } else {
//         navigate("UserStack");
//       }
//     }, 2000);
//   }

  render() {
    return (
      

      <View>
      <Text>Main Screen</Text>
    </View>

    );
  }
}

export default withNavigation(MainScreen);
