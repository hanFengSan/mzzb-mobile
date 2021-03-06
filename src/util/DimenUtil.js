/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, PixelRatio } from 'react-native';

export default {
    STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    APPBAR_HEIGHT: Platform.OS === 'ios' ? 44 : 56,
    SCREEN_WIDTH: Dimensions.get('window').width,
    px2dp(size) {
        return size / PixelRatio.get();
    }
}
