/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import ColorUtil from 'light/src/util/ColorUtil';
import DropDownToolbar from 'light/src/component/widget/DropDownToolbar';
import OptionBar from 'light/src/component/widget/OptionBar';
import Color from 'light/src/assets/value/Color';

export default class DropDownToolbarActivity extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DropDownToolbar title={this.props.title} appBarColor={Color.primary_color}
                    dropDownItems={this.props.dropDownItems}
                    onValueChange={this.props.onValueChange}
                    statusBarColor={Platform.OS === 'ios' ? Color.primary_color : Color.accent_color} />
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
    }
});