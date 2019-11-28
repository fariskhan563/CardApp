import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

//Screens
import WelcomeScreen from "./welcomeScreenNav";
import InfoScreen from "./infoScreenNav";
import MainScreen from "./mainScreenNav";

const LoadingStack = createStackNavigator(
  {
    WelcomeScreen
  },
  {
    initialRouteName: "WelcomeScreen"
  }
);

const MainStack = createStackNavigator(
  {
    InfoScreen,
    MainScreen
  },
  {
    initialRouteName: "InfoScreen"
  }
);

const AppNavigatorContainer = createSwitchNavigator(
  {
    LoadingStack,
    MainStack,
  },
  {
    initialRouteName: "LoadingStack"
  }
);

export default createAppContainer(AppNavigatorContainer);
