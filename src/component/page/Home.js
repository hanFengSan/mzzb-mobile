// 主页
import React, {Component} from 'react'
import {TabNavigator} from "react-navigation"
import AmazonRank from '../fragment/AmazonRank'
import OriconRank from '../fragment/OriconRank'


export default MainScreenNavigator = TabNavigator({
    AmazonRank: {screen: AmazonRank},
    OriconRank: {screen: OriconRank}
}, {

    tabBarOptions: {
        activeTintColor: '#2980b9',
        labelStyle: {
            fontSize: 12,
            marginBottom: 4
        }
    }
});
