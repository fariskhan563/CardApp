import React, { Component } from "react";
import MainScreen from "../Containers/MainScreen";

class MainScreenNav extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <MainScreen navigate={navigate} />;
  }
}

export default MainScreenNav;
