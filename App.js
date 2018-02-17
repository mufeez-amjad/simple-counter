import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class App extends React.Component {

  constructor(){
        super();
        this.state = {
          number: 0,
          backgroundColor: "#fff",
          textColor: "#000"
        };
  }


  increment = () => {
    this.setState({
      number: this.state.number + 1,
      backgroundColor: "#12B543",
      textColor: "#fff",
    });
  }

  decrement = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
        backgroundColor: "#B51210",
        textColor: "#fff",
      });
    }
  }

  reset = () => {
    this.setState({
      number: 0,
      backgroundColor: "#fff",
      textColor: "#000"
    });
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <Text style={[styles.counter, {color: this.state.textColor}]}>{this.state.number}</Text>

        <View style={styles.footer}>
          <Button
            onPress= {this.increment}
            title = "Increment"
            color = "#006920"
          />
          <Button
            onPress= {this.decrement}
            title = "Decrement"
            color = "#690100"
          />
        </View>
        <View style={[styles.footer, {bottom: -30}]}>
          <Button
            onPress= {this.reset}
            title = "Reset"
            color = "#000"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  counter: {
    fontSize: 100,
    color: "#000"
  },

  footer: {
    position: 'absolute',
    bottom: 10,
    height: 150,
    alignItems:'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});
