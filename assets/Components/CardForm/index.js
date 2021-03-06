import React from "react";
import { View, TextInput, Image, Text, } from "react-native";
import { withNavigation } from "react-navigation";
import { Images, Colors } from "../../Utils/index";
import styles from "./style";


class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bankName: "",
      cardCredit: "",
      installmentMonths: "",
      interest: "",
      monthlyPay: ""
    };
  }

  render() {
  const { bankName, cardCredit, installmentMonths, interest, monthlyPay } = this.state;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemText}> 1 </Text>
        </View>
        <View style={styles.imgWrapper}>
          <Image source={Images.card} style={styles.cardImage} />
        </View>
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>Bank Name</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => this.setState({ bankName: text })}
            value={bankName}
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>Card Credit Provide (Amount)</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            onChangeText={text => this.setState({ cardCredit: text })}
            value={cardCredit}
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>Installment Months (18/24/48)</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            onChangeText={text => this.setState({ installmentMonths: text })}
            value={installmentMonths}
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>Card Interest Monthly (%)</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            onChangeText={text => this.setState({ interest: text })}
            value={interest}
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.labelText}>Card Monthly Payments</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            onChangeText={text => this.setState({ monthlyPay: text })}
            value={monthlyPay}
          />
        </View>
      </View>
    </View>
  );
  }
}


export default withNavigation(CardForm);
