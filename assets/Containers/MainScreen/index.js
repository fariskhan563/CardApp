import React from "react";
import { View, ScrollView, Image, Text, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Images, Colors } from "../../Utils/index";
import styles from "./style";

//Comonent
import CardForm from "../../Components/CardForm";
import Result from "../../Components/Result";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: [
        {
          number: 1,
        },
        //Array to add more forms
        // {
        //   number: 2,
        // }
      ],
      results: [
        {
          number: 1,
          bankName: "HBL Bank",
        },
        {
          number: 2,
          bankName: "Mezan Bank",
        },
        {
          number: 3,
          bankName: "MCB Bank",
        }
      ],
      resultPopUp: false,
    };
  }
  showResult = () => {
    const { resultPopUp } = this.state;
    this.setState({
      resultPopUp: !resultPopUp
    });
  };
  
  render() {
    const {
      forms,
      results,
      resultPopUp,
    } = this.state;
    return (
      <React.Fragment>
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
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView} behavior="padding">

              {/* Comonent */}
              {forms.map(value => {
                return <CardForm form={value} />;
              })}

              <TouchableOpacity onPress={this.showResult}>
                <View style={styles.btnContainer}>
                  <Text style={styles.btnText}>
                    CALCULATE
                  </Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>

          <TouchableHighlight onPress="">
            <View style={styles.addContainer}>
              <Image source={Images.add} style={styles.addImage} />
            </View>
          </TouchableHighlight>
        </View>

        {resultPopUp ? (
          <View style={styles.popupWrapper}>
            <View style={styles.popUp}>
              <View style={styles.popUpHeader}>
                <View style={styles.popUpHeading}>
                  <Text style={styles.headingText}>
                    RESULTS
                  </Text>
                </View>

                <View style={styles.iconWrapper}>
                  <TouchableOpacity onPress={this.showResult}>
                    <Text style={styles.crossIcon}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.popUpResults}>
                {/* Comonent */}
                {results.map(value => {
                  return <Result result={value} />;
                })}
              </View>
            </View>
          </View>
        ) : null}

      </React.Fragment>
    );
  }
}

export default withNavigation(MainScreen);
