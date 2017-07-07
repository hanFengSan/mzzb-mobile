// 主页
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, ListView } from 'react-native'
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
        routes: null
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
            labelStyle={{ color: 'rgba(0,0,0,0.6)' }}
        />;
    };

    _renderScene = ({ route }) => {
        const list = this.state.dataList.filter(i =>
            route.key === i.id.toString())[0]
            .discs;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        const dataSource = ds.cloneWithRows(list);
        let numNode = (row) => {
            if ((row.curk || 0).toString().length + (row.prrk || 0).toString().length < 7) {
                return (
                    <View>
                        <Text style={styles.num}>{`${(row.curk || '--')}/${(row.prrk || '--')}`}</Text>
                    </View>
                );
            } else {
                return (
                    <View>
                        <Text style={styles.num}>{(row.curk || '--')}</Text>
                        <Text style={styles.num}>{(row.prrk || '--')}</Text>
                    </View>
                )
            }
        }
        return (
            <ListView
                style={styles.page}
                contentContainerStyle={[styles.pageContent]}
                dataSource={dataSource}
                renderRow={(rowData =>
                    <View style={styles.row}>
                        {numNode(rowData)}
                        <Text numberOfLines={1} style={styles.title}>{rowData.title}</Text>
                        <Text style={styles.trend}>上升</Text>
                    </View>)}>
            </ListView >
        )
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
                        title: item.title.replace('日亚', '').replace(/^.*?年[0]/, '')
                    }
                })
                this.setState({ dataList: res, routes });
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
    pageContent: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    page: {
        backgroundColor: '#fff',
        flex: 1,
        height: 10000,
    },
    num: {
        width: 50,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.3)'
    },
    trend: {
        width: 50,
    },
    title: {
        fontSize: 12,
        flexDirection: 'column',
        flex: 0.8,
        flexWrap: "wrap",
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        height: 62,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    }
});