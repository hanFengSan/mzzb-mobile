/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';
import { StackNavigator } from 'react-navigation';
import DiscRank from 'light/src/bean/DiscRank';

export default class DiscTag extends Component {
    getStrByType(type) {
        switch (type) {
            case DiscRank.TYPE_NYD:
            case DiscRank.TYPE_N:
                return '尼限';
            case DiscRank.TYPE_D:
                return 'DVD';
            case DiscRank.TYPE_ND:
                return '尼DVD';
            default:
                return this.props.type;
        }
    }

    getColorByType(type) {
        switch (type) {
            case DiscRank.TYPE_NYD:
            case DiscRank.TYPE_N:
                return Color.primary_color;
            case DiscRank.TYPE_D:
                return Color.emerald;
            case DiscRank.TYPE_ND:
                return Color.soft_purple;
            default:
                return this.props.type;
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.triangle, { borderTopColor: this.getColorByType(this.props.type) }]} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.getStrByType(this.props.type)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 30,
        borderRightWidth: 30,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 20,
        width: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 8,
        includeFontPadding: false,
        textAlign: 'center',
        backgroundColor: 'transparent',
        transform: [{ rotate: '-45deg' }]
    }
});