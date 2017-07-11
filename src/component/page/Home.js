/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import CustomToolbar from 'light/src/component/widget/CustomToolbar';
import ListTagHeader from 'light/src/component/widget/ListTagHeader';
import NewsCard from 'light/src/component/widget/NewsCard';
import HomeBanner from 'light/src/component/widget/HomeBanner';
import OptionBar from 'light/src/component/widget/OptionBar';
import TransparentScrollActivity from 'light/src/component/page/base/TransparentScrollActivity';
import ImageSet from 'light/src/assets/value/ImageSet';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
    static navigationOptions = {
        title: '名作之壁',
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <TransparentScrollActivity title='名作之壁'>
                <HomeBanner src={ImageSet.banner_2} text={'灯曰: 原创的魅力就在意其不可预测性'} />
                {/*<View style={styles.optionBar}></View>*/}
                <OptionBar dataset={[
                    { key: '日亚排名', icon: ImageSet.ic_amazon, onPress: () => navigate('AmazonRank', {}) },
                    { key: '销量日榜', icon: ImageSet.ic_d_rank },
                    { key: '销量周榜', icon: ImageSet.ic_w_rank },
                    { key: '销量查询', icon: ImageSet.ic_search },
                ]} />
                <OptionBar dataset={[
                    { key: '壁吧视频', icon: ImageSet.ic_movie },
                    { key: '壁吧资讯', icon: ImageSet.ic_read },
                    { key: '壁吧产品', icon: ImageSet.ic_info },
                    { key: '更多', icon: ImageSet.ic_more },
                ]} />
                <ListTagHeader text={'今日推荐'} />
                <NewsCard title={'【HOHO】07月09日Amazon七月新番排名'} intro={'今晚有骑士与魔法，人马小姐不迷茫，Princess Principal，洁癖男子！青山君和战斗女子学园大家今晚看什么？'} info={'2017月07日07日'} src={require('light/src/assets/image/banner2.jpg')} />
                <NewsCard title={'【排行】历代声优/动漫歌手CD总销量TOP30'} intro={'因系统敏感删帖，就放视频号吧, 第一次尝试做数据视频，有兴趣因系统敏感删帖，就放视频号吧因系统敏感删帖，就放视频号吧'} info={'2017月07日07日'} src={require('light/src/assets/image/banner.jpg')} />
                <NewsCard title={'B站番剧数据统计：2017年07月段'} intro={'1、只列出在B站有，且在大陆可见的番剧。（包括B站版权、腾讯外链和UP主搬运及投稿的番，含国漫，不含港澳台版权）'} info={'2017月07日07日'} src={require('light/src/assets/image/banner2.jpg')} />
                <ListTagHeader text={'壁吧资讯'} />
                <NewsCard title={'标题'} intro={'一点简介'} info={'2017月07日07日'} src={require('light/src/assets/image/banner2.jpg')} />
                <NewsCard title={'标题'} intro={'一点简介'} info={'2017月07日07日'} src={require('light/src/assets/image/banner.jpg')} />
                <NewsCard title={'标题'} intro={'一点简介'} info={'2017月07日07日'} src={require('light/src/assets/image/banner2.jpg')} />
            </TransparentScrollActivity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        height: 223,
        width: DU.SCREEN_WIDTH
    },
    optionBar: {
        marginTop: 8
    }
});