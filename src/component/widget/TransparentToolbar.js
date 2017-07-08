/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions } from 'react-native';
import DU from 'light/src/util/DimenUtil';

export default class TransparentToolbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='light-content' />
                <View style={styles.statusBar}></View>
                <View style={styles.toolbar}>
                    <View style={Platform.OS === 'ios' ? styles.iosTitleContainer : styles.androidTitleContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <Image style={styles.more} source={require('light/src/assets/icon/more_white.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000
    },
    statusBar: {
        height: DU.STATUSBAR_HEIGHT
    },
    toolbar: {
        height: DU.APPBAR_HEIGHT,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        width: DU.SCREEN_WIDTH,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    iosTitleContainer: {
        alignItems: 'center'
    },
    androidTitleContainer: {
        alignItems: 'flex-start'
    },
    title: {
        color: 'white',
        fontSize: Platform.OS === 'ios' ? 17 : 18,
        fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
        marginLeft: Platform.OS === 'ios' ? 0 : 17
    },
    optionContainer: {
        position: 'absolute',
        right: 10,
    },
    more: {
        height: 24,
        width: 24,
        transform: [{ rotate: Platform.OS === 'ios' ? '90deg' : '0deg' }]
    }
});