/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import ColorUtil from 'light/src/util/ColorUtil';
import Color from 'light/src/assets/value/Color';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';

export default class HomeBanner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={this.props.src}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.text}>{'球总三连: 逆天! 神回! 起航!'}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: 223,
        width: DU.SCREEN_WIDTH
    },
    infoContainer:{
        position: 'absolute',
        bottom: 10,
        left: 17
    },
    text: {
        fontSize: 12,
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: ColorUtil.setAlpha('#000000', 120)
    }
});
