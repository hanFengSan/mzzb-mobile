// 主页
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Linking} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class Splash extends Component {

    static navigationOptions = {
        title: '销量榜单',
        tabBar: {
            label: '销量榜单',
            icon: ({tintColor}) => (
                <Image
                    source={require('../../assets/icon/list_black.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            )
        },
        header: {
            style: { backgroundColor: '#3498db'},
            titleStyle: { color: '#ffffff' }
        }
    };

    componentDidMount() {
        // setTimeout(() => SplashScreen.hide(), 500);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity
                style={styles.container}
            >
                <View >
                    <Text style={styles.item}>
                        SplashScreen 启动屏
                    </Text>
                    <Text style={styles.item}>
                        @：http://www.devio.org/
                    </Text>
                    <Text style={styles.item}>
                        GitHub:https://github.com/crazycodeboy
                    </Text>
                    <Text style={styles.item}>
                        Email:crazycodeboy@gmail.com
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop: 30
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
})