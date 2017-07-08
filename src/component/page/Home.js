/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import TransparentToolbar from 'light/src/component/widget/TransparentToolbar';
import OptionBar from 'light/src/component/widget/OptionBar';

export default class Home extends Component {
    static navigationOptions = {
        title: '名作之壁',
        header: {
            visible: false
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TransparentToolbar title='名作之壁'/>
                <Image
                    style={styles.banner}
                    source={require('light/src/assets/image/banner.jpg')}
                />
                <OptionBar></OptionBar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        height: 223,
        width: DU.SCREEN_WIDTH
    }
});