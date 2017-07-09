/*eslint-disable*/
import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';
import DU from 'light/src/util/DimenUtil';
import TransparentToolbar from 'light/src/component/widget/TransparentToolbar';
import ListTagHeader from 'light/src/component/widget/ListTagHeader';
import NewsCard from 'light/src/component/widget/NewsCard';
import OptionBar from 'light/src/component/widget/OptionBar';
import TransparentScrollActivity from 'light/src/component/page/base/TransparentScrollActivity';

export default class Home extends Component {
    static navigationOptions = {
        title: '名作之壁',
        header: {
            visible: false
        }
    };

    render() {
        return (
            <TransparentScrollActivity title='名作之壁'>
                <Image
                    style={styles.banner}
                    source={require('light/src/assets/image/banner.jpg')}
                />
                <OptionBar/>
                <ListTagHeader text={'今日推荐'}/>
                <NewsCard title={'标题'} intro={'一点简介'} info={'2017月07日07日'} src={require('light/src/assets/image/banner2.jpg')}/>
                <NewsCard title={'标题'} intro={'一点简介'} info={'2017月07日07日'} src={require('light/src/assets/image/banner.jpg')}/>
                <NewsCard title={'标题'} intro={'一点简介'} info={'2017月07日07日'} src={require('light/src/assets/image/banner2.jpg')}/>
                <ListTagHeader text={'壁吧资讯'}/>
            </TransparentScrollActivity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        height: 2000
    },
    banner: {
        height: 223,
        width: DU.SCREEN_WIDTH
    }
});