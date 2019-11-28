import React, { Component } from "react";
import InfoScreen from "../Containers/InfoScreen";

class InfoScreenNav extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render() {
    const { navigate } = this.props.navigation;
    return <InfoScreen navigate={navigate} />;
  }
}

export default InfoScreenNav;
