/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import ColorUtil from 'light/src/util/ColorUtil';
import TransparentToolbar from 'light/src/component/widget/TransparentToolbar';
import OptionBar from 'light/src/component/widget/OptionBar';
import Color from 'light/src/assets/value/Color';

export default class TransparentScrollActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusBarColor: ColorUtil.setAlpha(Platform.OS === 'ios' ? Color.primaryColor : Color.accentColor, 0),
            appBarColor: ColorUtil.setAlpha(Color.primaryColor, 0)
        };
    }

    _handleScroll(event) {
        let offset = Math.abs(event.nativeEvent.contentOffset.y * 2);
        if (ColorUtil.getAlpha(this.state.appBarColor) !== 255 && offset <255) {
            this.setState((previousState) => {
                return {
                    statusBarColor: ColorUtil.setAlpha(previousState.statusBarColor, offset > 255 ? 255 : offset),
                    appBarColor: ColorUtil.setAlpha(previousState.appBarColor, offset > 255 ? 255 : offset)
                };
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TransparentToolbar title={this.props.title} appBarColor={this.state.appBarColor}
                    statusBarColor={this.state.statusBarColor} />
                <ScrollView contentContainerStyle={styles.scrollView}
                    scrollEventThrottle={60}
                    showsVerticalScrollIndicator={false} onScroll={(event) => this._handleScroll(event)}>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        height: 2000
    }
});