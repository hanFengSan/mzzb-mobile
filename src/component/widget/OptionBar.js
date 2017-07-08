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
                <OptionItem name='分类资源' type='branch'></OptionItem>
                <OptionItem name='科普活动' type='user'></OptionItem>
                <OptionItem name='在线测试' type='test'></OptionItem>
                <OptionItem name='搜索资源' type='search'></OptionItem>
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
                iconSrc = require('light/src/assets/icon/ic_branch.png');
                break;
            case 'search':
                iconSrc = require('light/src/assets/icon/ic_search.png');
                break;
            case 'test':
                iconSrc = require('light/src/assets/icon/ic_test.png');
                break;
            case 'user':
                iconSrc = require('light/src/assets/icon/ic_user.png');
                break;
        }
        return (
            <ClickableItem onClick={this.clickItem}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={iconSrc} style={styles.icon}></Image>
                        <Text style={styles.text}>{this.props.name}</Text>
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
        fontSize: 12
    }
});