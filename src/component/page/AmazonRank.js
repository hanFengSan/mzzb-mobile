/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
import ListTagHeader from 'light/src/component/widget/ListTagHeader';
import NewsCard from 'light/src/component/widget/NewsCard';
import HomeBanner from 'light/src/component/widget/HomeBanner';
import OptionBar from 'light/src/component/widget/OptionBar';
import CustomToolbarActivity from 'light/src/component/page/base/CustomToolbarActivity';
import { StackNavigator, Transitioner } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class AmazonRank extends Component {
    static navigationOptions = {
        title: '日亚排名',
        header: {
            visible: false
        },

    };

    render() {
        return (
            <CustomToolbarActivity title='日亚排名'>
                <ScrollableTabView>
                    <ReactPage tabLabel="React" />
                    <FlowPage tabLabel="Flow" />
                    <JestPage tabLabel="Jest" />
                </ScrollableTabView>
            </CustomToolbarActivity>
        );
    }
}

const styles = StyleSheet.create({

});