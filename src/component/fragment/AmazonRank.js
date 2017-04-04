// 主页
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import JSONReqService from '../../service/request/JSONReqService'

export default class AmazonRank extends Component {

    static navigationOptions = {
        title: '日亚排名',
        tabBar: {
            label: '日亚排名',
            icon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/icon/trending_black.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        },
        header: {
            // right: <Image
            //     source={require('../../assets/icon/more_white.png')}
            //     style={{width: 26, height: 26, marginRight: 5}}
            // />,
            style: { backgroundColor: '#3498db' },
            titleStyle: { color: '#ffffff' },
        }
    };

    state = {
        index: 0,
        dataList: null,
        routes: [
            { key: '1', title: '实时TOP100' },
            { key: '2', title: '4月新番' },
            { key: '3', title: '1月新番' },
            { key: '4', title: '1月新番' },
            { key: '5', title: '1月新番' },
        ],
    };

    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBar
            {...props}
            tabStyle={{ height: 42 }}
            pressOpacity={1}
            pressColor='#3498db'
            style={{ backgroundColor: '#fff' }}
            indicatorStyle={{ backgroundColor: '#3498db', zIndex: 1000, height: 2, opacity: 1 }}
            scrollEnabled={true}
            // tabWidth="50"
            labelStyle={{ color: 'rgba(0,0,0,0.6)' }}
        />;
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <View style={[styles.page, { backgroundColor: '#1abc9c' }]} />;
            case '18':
                return <View style={[styles.page, { backgroundColor: '#2ecc71' }]} />;
            case '20':
                return <View style={[styles.page, { backgroundColor: '#9b59b6' }]} />;
            default:
                return null;
        }
    };

    componentDidMount() {
        setTimeout(() => SplashScreen.hide(), 500);
        new JSONReqService('http://anime-discs.com/sakura.do')
            .request()
            .then(res => {
                console.log(res);
                const routes = res.map(item => {
                    return {
                        key: item.id.toString(),
                        title: item.title
                    }
                })
                this.setState({dataList: res, routes});
            })
    }

    render() {
        if (this.state.dataList) {
            return (
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            );
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
    },
    item: {
        fontSize: 20,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
    icon: {
        width: 26,
        height: 26,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});