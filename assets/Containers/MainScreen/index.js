import React from "react";
import { View, ScrollView, Image, Text, } from "react-native";
import { withNavigation } from "react-navigation";
import { Images, Colors } from "../../Utils/index";
import styles from "./style";

//Comonent
import CardForm from "../../Components/CardForm"
import { TouchableOpacity } from "react-native-gesture-handler";

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image source={Images.logo} style={styles.logoImage} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>TIDE APP</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.formContainer}>

          <CardForm />

          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>
              CALCULATE
            </Text>
          </TouchableOpacity>

        </ScrollView>

        <View style={styles.addContainer}>
          <Image source={Images.add} style={styles.addImage} />
        </View>
      </View>
    );
  }
}

export default withNavigation(MainScreen);
