/*eslint-disable*/
import React, { Component, PureComponent } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView, FlatList } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import TU from 'light/src/util/TextUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
import DropDownToolbar from 'light/src/component/widget/DropDownToolbar';
import ListTagHeader from 'light/src/component/widget/ListTagHeader';
import NewsCard from 'light/src/component/widget/NewsCard';
import HomeBanner from 'light/src/component/widget/HomeBanner';
import DiscTag from 'light/src/component/widget/DiscTag';
import OptionBar from 'light/src/component/widget/OptionBar';
import CustomToolbarActivity from 'light/src/component/page/base/CustomToolbarActivity';
import { StackNavigator, Transitioner } from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Test from 'light/src/component/page/Test';
import Color from 'light/src/assets/value/Color';
import ImageSet from 'light/src/assets/value/ImageSet';
import API from 'light/src/service/API';

export default class DailyRank extends Component {
    static navigationOptions = {
        title: '销量日榜',
        header: null
    };

    state = {
        types: [
            { name: '综合BD', id: '106', data: [] },
            { name: '综合DVD', id: '104', data: [] },
            { name: '动画BD', id: '106103', data: [] },
            { name: '动画DVD', id: 'da', data: [] }
        ]
    };

    componentDidMount() {
        this.update();
    }

    update() {
        this.state.types.forEach(type => {
            API.getDailyRank(type.id)
                .then(res => {
                    this.setState({

                    })
                });
        })
    }

    renderTabs() {
        let result = [];
        this.state.types.forEach(item => {
            result.push(
                <View tabLabel={item.name} key={item.id}>
                    {/* <FlatList
                        key={this.state.dataList[this.state.index].id}
                        data={this.state.dataList[this.state.index].discs}
                        renderItem={this.renderItem.bind(this)}
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item, index) => item.id}
                        getItemLayout={(data, index) => ({ length: 62, offset: (62 + DU.px2dp(2)) * index - DU.px2dp(2), index })}
                    /> */}
                </View>
            );
        });
        return result;
    }

    render() {
        return (
            <CustomToolbarActivity title={DailyRank.navigationOptions.title}>
                <ScrollableTabView tabBarUnderlineStyle={styles.tabBarLine}>
                    {this.renderTabs()}
                </ScrollableTabView>
            </CustomToolbarActivity>
        );
    }
}

const styles = StyleSheet.create({
    tabBarLine: {
        backgroundColor: Color.primary_color
    }

});
