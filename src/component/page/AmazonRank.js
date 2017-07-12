/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView, FlatList } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
import ListTagHeader from 'light/src/component/widget/ListTagHeader';
import NewsCard from 'light/src/component/widget/NewsCard';
import HomeBanner from 'light/src/component/widget/HomeBanner';
import OptionBar from 'light/src/component/widget/OptionBar';
import CustomToolbarActivity from 'light/src/component/page/base/CustomToolbarActivity';
import { StackNavigator, Transitioner } from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Test from 'light/src/component/page/Test';
import Color from 'light/src/assets/value/Color';
import API from 'light/src/service/API';

export default class AmazonRank extends Component {
    static navigationOptions = {
        title: '日亚排名',
        header: null
    };

    state = {
        dataList: []
    };

    componentDidMount() {
        API.getAmazonRank()
            .then((res) => {
                this.setState({
                    dataList: res
                });
            }, (err) => {

            });
    }

    renderTab(rank) {
        return (
            <FlatList
                key={rank.id}
                tabLabel={rank.title}
                data={rank.discs}
                renderItem={this.renderItem}
            />
        );
    }

    renderItem({ item }) {
        return (
            <View key={item.id}>
                <Text>{item.sname}</Text>
            </View>
        );
    }

    render() {
        let tabs = this.state.dataList.reduce((sum, item) => {
            sum.push(this.renderTab(item));
            return sum;
        }, []);
        return (
            <CustomToolbarActivity title={AmazonRank.navigationOptions.title}>
                <ScrollableTabView
                    scrollWithoutAnimation={true}
                    style={styles.tabView}
                    initialPage={0}
                    tabBarBackgroundColor={Color.primary_color}
                    tabBarActiveTextColor={'white'}
                    tabBarInactiveTextColor={'white'}
                    tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                    prerenderingSiblingsNumber={Infinity}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    {tabs}
                </ScrollableTabView>
            </CustomToolbarActivity>
        );
    }
}

const styles = StyleSheet.create({
    tabView: {
    },
    tab: {
        backgroundColor: 'red',
        flex: 1
    }
});