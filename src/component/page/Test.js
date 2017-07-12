/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, Button, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
import ListTagHeader from 'light/src/component/widget/ListTagHeader';
import NewsCard from 'light/src/component/widget/NewsCard';
import HomeBanner from 'light/src/component/widget/HomeBanner';
import OptionBar from 'light/src/component/widget/OptionBar';
import CustomToolbarActivity from 'light/src/component/page/base/CustomToolbarActivity';
import { StackNavigator, Transitioner, TabNavigator } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ImageSet from 'light/src/assets/value/ImageSet';

class MyHomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={ImageSet.ic_movie}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={ImageSet.ic_read}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    }
});

const MyApp = TabNavigator({
    Home: {
        screen: MyHomeScreen
    },
    Notifications: {
        screen: MyNotificationsScreen
    },
    tmp: {
        screen: MyNotificationsScreen
    },
    x: {
        screen: MyNotificationsScreen
    }
}, {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            scrollEnabled: true,
            animationEnabled: false
        }
    });

export default MyApp;
