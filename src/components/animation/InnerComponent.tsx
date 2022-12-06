import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default class InnerComponent extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { isHidden: false, text: '' };
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.setState({ isHidden: !this.state.isHidden, text: '' });
  }
  onClickEvent() {
    alert("onClickEvent triggered");
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onClickEvent}
        style={{ borderWidth: 0, flexDirection: 'column', paddingLeft: 5 }}>
        <Text style={{ color: 'black', padding: 10 }}> Hidden text goes here for {this.props.myprop}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  headerRight: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 1,
    paddingTop: 25,
    flex: 1,
    margin: 5,
    paddingLeft: 0,

  },
  iconStyleRight: {
    paddingLeft: 350,
    textAlign: 'right',
    paddingTop: 1,
    color: 'black',

  },
  iconStyleLeft: {
    paddingLeft: 33,
    textAlign: 'right',

    marginRight: 10,
    color: 'white',

  }

});