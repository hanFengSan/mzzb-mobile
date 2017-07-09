/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';

export default class OptionBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <OptionItem name='日亚排名' type='branch'></OptionItem>
                <OptionItem name='销量日榜' type='user'></OptionItem>
                <OptionItem name='销量周榜' type='test'></OptionItem>
                <OptionItem name='销量查询' type='search'></OptionItem>
            </View>
        );
    }
}

class OptionItem extends Component {
    clickItem() {

    }

    render() {
        let iconSrc = '';
        switch (this.props.type) {
            case 'branch':
                iconSrc = require('light/src/assets/icon/ic_amazon.png');
                break;
            case 'search':
                iconSrc = require('light/src/assets/icon/ic_search2.png');
                break;
            case 'test':
                iconSrc = require('light/src/assets/icon/ic_rank2.png');
                break;
            case 'user':
                iconSrc = require('light/src/assets/icon/ic_rank.png');
                break;
        }
        return (
            <ClickableItem onClick={this.clickItem}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={iconSrc} style={styles.icon}></Image>
                        <Text allowFontScaling={false} style={styles.text}>{this.props.name}</Text>
                    </View>
                </View>
            </ClickableItem>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        marginTop: 8,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: DU.SCREEN_WIDTH / 4
    },
    item: {
        alignItems: 'center'
    },
    icon: {
        height: 27,
        width: 27,
        marginTop: 5,
        tintColor: Color.primaryColor
    },
    text: {
        marginTop: 5,
        fontSize: 12,
        color: Color.primaryTextColor
    }
});