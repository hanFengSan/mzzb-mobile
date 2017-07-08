/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';

export default class ClickableItem extends Component {
    render() {
        if (Platform.OS === 'ios') {
            return (
                <TouchableHighlight onPress={this.props.onClick} underlayColor={Color.clickBgColor}>
                    {this.props.children}
                </TouchableHighlight>
            );
        } else {
            return (
                <TouchableNativeFeedback onPress={this.props.onClick} background={TouchableNativeFeedback.Ripple(Color.clickBgColor, false)}>
                    {this.props.children}
                </TouchableNativeFeedback>
            );
        }
    }
}