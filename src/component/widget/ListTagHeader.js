/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';

export default class ListTagHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.symbol}/>
                <Text allowFontScaling={false} style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        marginLeft: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    symbol: {
        backgroundColor: Color.primaryColor,
        height: 16,
        width: 3
    },
    text: {
        fontSize: 12,
        color: Color.primaryTextColor,
        marginLeft: 5
    }
});