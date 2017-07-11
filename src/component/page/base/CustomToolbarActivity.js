/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import ColorUtil from 'light/src/util/ColorUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
import OptionBar from 'light/src/component/widget/OptionBar';
import Color from 'light/src/assets/value/Color';

export default class TransparentScrollActivity extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomToolbar title={this.props.title} appBarColor={Color.primary_color}
                    statusBarColor={Platform.OS === 'ios'? Color.primary_color : Color.accent_color} />
                <ScrollView contentContainerStyle={styles.scrollView}
                    scrollEventThrottle={60}
                    showsVerticalScrollIndicator={false}>
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
    }
});