/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import Color from 'light/src/assets/value/Color';

export default class CustomToolbar extends Component {
    componentDidMount() {
        if (Platform.OS !== 'ios') {
            StatusBar.setTranslucent(true); // fix the bug of translucent effect no working in sometimes
        }
    }

    getStatusBarView() {
        if (Platform.OS === 'ios') {
            return <View style={[styles.statusBar, { backgroundColor: this.props.statusBarColor }]}></View>
        }
    }

    getContainerStyle() {
        switch (this.props.mode) {
            case 'overlay':
                return styles.overlayContainer;
            case 'static':
            default:
                return styles.container;
        }
    }

    render() {
        return (
            <View style={this.getContainerStyle()}>
                <StatusBar translucent={true} backgroundColor={this.props.statusBarColor || 'transparent'} barStyle='light-content' />
                {
                    this.getStatusBarView()
                }
                <View style={[styles.toolbar, { backgroundColor: this.props.appBarColor }]}>
                    <View style={Platform.OS === 'ios' ? styles.iosTitleContainer : styles.androidTitleContainer}>
                        <Text allowFontScaling={false} style={styles.title}>{this.props.title}</Text>
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

    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000
    },
    statusBar: {
        backgroundColor: 'transparent',
        height: DU.STATUSBAR_HEIGHT
    },
    toolbar: {
        height: DU.APPBAR_HEIGHT,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        width: DU.SCREEN_WIDTH,
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : DU.STATUSBAR_HEIGHT
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