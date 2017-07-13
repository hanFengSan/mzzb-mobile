/*eslint-disable*/
import React, { Component, PureComponent } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView, FlatList } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import TU from 'light/src/util/TextUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
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
                renderItem={this.renderItem.bind(this)}
                ItemSeparatorComponent={this.renderSeparator}
            />
        );
    }

    getSituationStyle(item) {
        if (item.currentRank < item.prevRank) {
            return [styles.situation, { tintColor: Color.primary_color, transform: [{ rotate: '180deg' }]}]
        } else if (item.currentRank > item.prevRank) {
            return [styles.situation, { tintColor: Color.soft_red}];
        } else {
            return [styles.situation, { tintColor: Color.soft_yellow, transform: [{ rotate: '-90deg' }]}]
        }
    }

    renderItem({ item }) {
        return (
            <View key={item.id} style={styles.itemContainer}>
                <View style={styles.content}>
                    <Text allowFontScaling={false} style={styles.index}>{TU.paddy(item.index + 1, 3)}</Text>
                    <Text allowFontScaling={false} style={styles.rank}>{`${item.currentRank}/${item.prevRank}`}</Text>
                    <View style={styles.rightContainer}>
                        <Image source={ImageSet.ic_arrow_downward} style={this.getSituationStyle(item)} />
                        <Text allowFontScaling={false} style={styles.pt}>{item.pt}</Text>
                        <Text numberOfLines={2} allowFontScaling={false} style={styles.name}>{item.sName}</Text>
                    </View>
                </View>
                { // tag view
                    item.type !== 0 ?
                        <View style={styles.tag}>
                            <DiscTag type={item.type} />
                        </View>
                        : null
                }
            </View>
        );
    }

    renderSeparator() {
        return (
            <View
                style={styles.itemSeparator}
            />
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
                    prerenderingSiblingsNumber={2}
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
    },
    itemSeparator: {
        height: DU.px2dp(2),
        backgroundColor: Color.split_grey
    },
    itemContainer: {
        backgroundColor: 'white'
    },
    content: {
        height: 62,
        alignItems: 'center',
        flexDirection: 'row'
    },
    tag: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    index: {
        fontSize: 16,
        marginLeft: 14,
        color: Color.text_grey_dark,
        includeFontPadding: false,
        fontFamily: 'CenturyGothic-Bold',
        textAlignVertical: 'center',
        backgroundColor: 'transparent',
    },
    rank: {
        marginLeft: 8,
        fontSize: 12,
        color: Color.text_dark_grey,
        includeFontPadding: false,
        fontFamily: 'CenturyGothic-Bold',
        textAlignVertical: 'center',
        backgroundColor: 'transparent',
    },
    rightContainer: {
        flexDirection: 'row-reverse',
        flex: 1,
        alignItems: 'center'
    },
    situation: {
        height: 14,
        width: 14,
        marginRight: 10,
        backgroundColor: 'transparent'
    },
    pt: {
        fontSize: 12,
        color: Color.text_dark_grey,
        fontFamily: 'CenturyGothic-Bold',
        includeFontPadding: false,
        marginRight: 5,
        backgroundColor: 'transparent',
        textAlignVertical: 'center'
    },
    name: {
        fontSize: 14,
        marginLeft: 22,
        marginRight: 5,
        flex: 1,
        backgroundColor: 'transparent',
        textAlignVertical: 'center',
        color: Color.text_dark_grey
    }
});