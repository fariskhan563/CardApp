import React, { Component } from "react";
import WelcomeScreen from "../Containers/WelcomeScreen";

class WelcomeScreenNav extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    return <WelcomeScreen navigate={navigate} />;
  }
}

export default WelcomeScreenNav;
