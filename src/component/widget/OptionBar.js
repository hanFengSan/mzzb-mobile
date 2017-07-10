/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';
import ClickableItem from 'light/src/component/widget/base/ClickableItem';

export default class OptionBar extends Component {
    render() {
        let list = this.props.dataset.reduce((sum, item) => {
            sum.push(<OptionItem key={item.key} name={item.key} icon={item.icon}></OptionItem>);
            return sum;
        }, []);
        return (
            <View style={styles.container}>
                {list}
            </View>
        );
    }
}

class OptionItem extends Component {
    clickItem() {

    }

    render() {
        return (
            <ClickableItem onClick={this.clickItem}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image source={this.props.icon} style={styles.icon}></Image>
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