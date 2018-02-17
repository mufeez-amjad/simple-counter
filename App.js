import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
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


        <TouchableOpacity
         style={[styles.button, {backgroundColor: "#006920"}]}
         onPress={this.increment}
         activeOpacity = { .5 }
         >
         <Text style={styles.buttonText}>Increment</Text>
       </TouchableOpacity>

       <TouchableOpacity
        style={[styles.button, {backgroundColor: "#690100"}]}
        onPress={this.decrement}
        activeOpacity = { .5 }
        >
        <Text style={styles.buttonText}>Decrement</Text>
       </TouchableOpacity>
        </View>

        <View style={[styles.footer, {bottom: -22}]}>
        <TouchableOpacity
         style={[styles.button, {backgroundColor: "#333333"}]}
         onPress={this.reset}
         activeOpacity = { .5 }
         >
         <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
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

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20
  },

  buttonText: {
    color: "#fff",
    fontSize: 20
  },

  footer: {
    position: 'absolute',
    bottom: 30,
    height: 150,
    alignItems:'center',
    flex: 1,
    flexDirection: 'row',
  },

});
