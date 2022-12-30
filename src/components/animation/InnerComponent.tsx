import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/InnerComponent.style';

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
        style={styles.main_view}>
        <Text style={styles.text_style}> Hidden text goes here for {this.props.myprop}</Text>
      </TouchableOpacity>
    );
  }
}

